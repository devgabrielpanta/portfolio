export class AppPortfolio extends HTMLElement {
  locale = "pt";
  provider;

  /* ---------------- TEXTOS DO PORTFÓLIO ---------------- */

  portfolioContent = {
    pt: [
      {
        title: "Single Page Applications (SPA)",
        description:
          "Desenvolvo aplicações robustas focadas na gestão eficiente de dados e otimização de processos corporativos. Com projetos que vão desde sistemas de reservas em tempo real até plataformas SaaS como o 'Plano Agenda Fechada', crio interfaces fluídas e responsivas que transformam a experiência do usuário e elevam a produtividade operacional.",
      },
      {
        title: "Multi-Tenant Applications",
        description:
          "Especialista em arquiteturas escaláveis, crio soluções que maximizam a eficiência e eliminam redundâncias operacionais entre clientes. Através de sistemas inovadores, como geradores de landing pages multi-tenant , permito que empresas gerenciem múltiplos inquilinos simultaneamente com uma base de código unificada, segura e de alta performance.",
      },
      {
        title: "Headless CMS",
        description:
          "Implemento soluções com Headless CMS (ex: Sanity.io), estruturando dados para separar o conteúdo do código. Desenvolvo interfaces intuitivas e lógicas de conteúdo dinâmico que dão autonomia a equipes sem expertise técnica, permitindo a gestão e atualização de informações de forma ágil e descomplicada em diversas plataformas.",
      },
      {
        title: "Website / WordPress",
        description:
          "Desenvolvo websites de alta performance para PMEs e profissionais liberais, utilizando tanto WordPress quanto tecnologias 'vanilla' sob medida. Com um portfólio diversificado no setor de serviços e hospitalidade (ex: UPsushi, DOCTA, Paris Clinics), entrego presença digital sólida com foco em usabilidade e SEO para destacar sua marca.",
      },
    ],
    en: [
      {
        title: "Single Page Applications (SPA)",
        description:
          "I develop robust applications focused on efficient data management and optimization of corporate processes. With projects ranging from real-time booking systems to SaaS platforms like 'Plano Agenda Fechada', I create fluid and responsive interfaces that transform user experience and enhance operational productivity.",
      },
      {
        title: "Multi-Tenant Applications",
        description:
          "As a specialist in scalable architectures, I create solutions that maximize efficiency and eliminate operational redundancies among clients. Through innovative systems, such as multi-tenant landing page generators, I enable companies to manage multiple tenants simultaneously with a unified, secure, and high-performance codebase.",
      },
      {
        title: "Headless CMS",
        description:
          "I implement solutions with Headless CMS (e.g., Sanity.io), structuring data to separate content from code. I develop intuitive interfaces and dynamic content logic that empower teams without technical expertise, allowing for agile and uncomplicated management and updating of information across various platforms.",
      },
      {
        title: "Website / WordPress",
        description:
          "I develop high-performance websites for SMEs and freelancers, using both WordPress and custom 'vanilla' technologies. With a diverse portfolio in the service and hospitality sectors (e.g., UPsushi, DOCTA, Paris Clinics), I deliver a solid digital presence focused on usability and SEO to highlight your brand.",
      },
    ],
  };

  /* ---------------- CALLBACKS E EVENTOS ---------------- */

  connectedCallback() {
    this.render();
    this.cacheNodes();
    this.updateTexts();

    this.provider = this.closest("app-provider");
    this.provider?.subscribe(this);
  }

  disconnectedCallback() {
    this.provider?.unsubscribe(this);
  }

  onLocaleChange(locale) {
    this.locale = locale;
    this.updateTexts();
  }

  /* ---------------- RENDER ESTÁTICO ---------------- */
  render() {
    this.innerHTML = /* html */ `
        <section id="portfolio"
        class="
          flex flex-col
          md:grid md:grid-cols-2
          min-h-[90vh]
          md:h-[90vh] md:min-h-0
          gap-10 m-8 p-6
          bg-base-100 rounded-lg
        "
      >

          <!-- Coluna esquerda -->
            <div class="flex flex-col items-center justify-center">
              <picture>
                <img
                  src="assets/images/photos/portfolio.png"
                  alt="Gabriel Panta de terno e óculos sorrindo para a câmera"
                  width="400"
                />
                <figcaption class="text-center text-lg font-semibold italic">
                  Gabriel Panta, full-stack web developer
                </figcaption>
              </picture>
            </div>

            <!-- Coluna direita -->
            <div id="portfolio-accordion"
              class="
                flex flex-col
                justify-center
                min-h-0
                md:h-full
                md:overflow-y-auto
                pr-4
              "
            >
            </div>
        </section>
    `;
  }

  /* ---------------- CACHE ---------------- */

  cacheNodes() {
    this.i18nNodes = this.querySelectorAll("[data-i18n]");
    this.portfolioAccordion = this.querySelector("#portfolio-accordion");
    this.portfolioItems = null;
  }

  /* ---------------- UPDATE DOS TEXTOS ------------ */

  updateTexts() {
    const data = this.portfolioContent[this.locale];

    if (!this.portfolioItems) {
      this.portfolioItems = data.map((_, index) => {
        const el = document.createElement("div");
        el.className =
          "collapse collapse-plus bg-base-100 border border-base-300";

        el.innerHTML = /* html */ `
          <input 
            type="radio" 
            name="my-accordion-3" 
            ${index === 0 ? 'checked="checked"' : ""}
          />
          <div class="collapse-title font-semibold"></div>
          <div class="collapse-content text-sm"></div>
        `;

        this.portfolioAccordion.appendChild(el);
        return el;
      });
    }

    data.forEach((item, index) => {
      const el = this.portfolioItems[index];
      el.querySelector(".collapse-title").textContent = item.title;
      el.querySelector(".collapse-content").textContent = item.description;
    });
  }
}
