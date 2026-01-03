export class AppCurriculum extends HTMLElement {
  locale = "pt";
  provider;

  /* ---------------- TEXTOS DA PÁGINA ---------------- */

  translations = {
    pt: {
      "education.title": "Educação",
      "education.headers.year": "Ano",
      "education.headers.degree": "Grau",
      "education.headers.institution": "Instituição",
      "education.headers.location": "Localização",
      "experience.title": "Experiência profissional",
    },
    en: {
      "education.title": "Education",
      "education.headers.year": "Year",
      "education.headers.degree": "Degree",
      "education.headers.institution": "Institution",
      "education.headers.location": "Location",
      "experience.title": "Professional Experience",
    },
  };

  /* ---------------- TEXTOS DO CURRÍCULO ---------------- */

  educationContent = {
    pt: [
      {
        period: "2025 - 2027",
        degree: "Mestrado em Gestão de Sistemas de Informação",
        institution: "Universidade NOVA de Lisboa",
        location: "Lisboa, Portugal",
      },
      {
        period: "2025 - 2026",
        degree: "Pós-Graduação em Front-end Engineering",
        institution: "FIAP",
        location: "São Paulo, Brasil (online)",
      },
      {
        period: "2011 - 2016",
        degree: "Bacharelado e Licenciatura em Contabilidade",
        institution: "Brasil e Portugal",
        location: "",
      },
    ],
    en: [
      {
        period: "2025 - 2027",
        degree: "Master's in Information Systems Management",
        institution: "NOVA University of Lisbon",
        location: "Lisbon, Portugal",
      },
      {
        period: "2025 - 2026",
        degree: "Postgraduate in Front-end Engineering",
        institution: "FIAP",
        location: "São Paulo, Brazil (online)",
      },
      {
        period: "2011 - 2016",
        degree: "Bachelor's and Licentiate in Accounting",
        institution: "Brazil and Portugal",
        location: "",
      },
    ],
  };

  experienceContent = {
    pt: [
      {
        period: "11/2025 - atual",
        role: "UPskill - NTT Data",
        description: `Integrante do programa intensivo Upskill, direcionado para Web Front-end e
                    simulação de ambiente corporativo. O domínio das tecnologias web atuais serve de alicerce
                    para a continuidade do percurso na NTT Data, em regime de formação em contexto profissional.
                    A trajetória está desenhada para evoluir da capacitação técnica atual para a aplicação real
                    em ambiente de consultoria tecnológica.`,
      },
      {
        period: "10/2021 - 10/2025",
        role: "Web Developer",
        description: `Desenvolvimento full-stack de soluções web personalizadas para PMEs nos setores
                    de serviços e hotelaria, focando em automação e escalabilidade.
                    Liderei a criação de plataformas complexas, incluindo um construtor de sites
                    com automação de marketing e sistemas de reservas em tempo real
                    Responsável por todo o ciclo: arquitetura de interfaces responsivas (UI/UX),
                    gestão de dados (CMS/CRUD), integração de APIs (REST/GraphQL) e pagamentos,
                    utilizando a stack moderna de JavaScript (Next.js, React, Node.js).`,
      },
      {
        period: "08/2017 - 10/2021",
        role: "Senior Tax Analyst",
        description: `Na Cogna Educação, atuei com foco na eficiência operacional e automação de processos financeiros.
                    Liderei iniciativas que otimizaram o fecho mensal em 89% e recuperaram R$50M em créditos.
                    A minha experiência centrou-se em desenhar lógicas de automação e coordenar equipas multidisciplinares.
                    Esta bagagem analítica e de resolução de problemas complexos é a base que hoje aplico na
                    construção de software, garantindo soluções que trazem valor real e mensurável ao negócio.`,
      },
      {
        period: "09/2015 - 07/2017",
        role: "Accountant",
        description: `Experiência internacional com distinção académica (18/20 no projeto final). Focado na 
                    revisão integral de dados financeiros e conformidade. 
                    Desenvolvi o rigor analítico e a estruturação lógica de processos, 
                    transferindo esta atenção extrema ao detalhe para a qualidade no desenvolvimento de software.`,
      },
      {
        period: "06/2011 - 08/2015",
        role: "Senior Auditor",
        description: `Gestão de auditorias externas e projetos de consultoria tributária para clientes corporativos. 
                    O âmbito de funções incluiu a coordenação de due diligence, revisão de demonstrações 
                    financeiras e definição de estratégias de compliance, garantindo a aderência às normas 
                    locais e internacionais.`,
      },
    ],

    en: [
      {
        period: "11/2025 - present",
        role: "UPskill Program – NTT Data",
        description: `Participant in the intensive Upskill program, focused on Web Front-end development
                    and corporate environment simulation. Mastery of modern web technologies serves as the
                    foundation for continued progression at NTT Data through on-the-job professional training.
                    The program is designed to evolve from current technical upskilling to real-world application
                    within a technology consulting environment.`,
      },
      {
        period: "10/2021 - 10/2025",
        role: "Web Developer",
        description: `Full-stack development of custom web solutions for SMEs in the services and hospitality sectors,
                    with a strong focus on automation and scalability.
                    Led the development of complex platforms, including a website builder with marketing automation
                    and real-time booking systems.
                    Responsible for the full development lifecycle: responsive interface architecture (UI/UX),
                    data management (CMS/CRUD), API integrations (REST/GraphQL), and payment systems,
                    using a modern JavaScript stack (Next.js, React, Node.js).`,
      },
      {
        period: "08/2017 - 10/2021",
        role: "Senior Tax Analyst",
        description: `At Cogna Educação, worked with a strong focus on operational efficiency and financial process automation.
                    Led initiatives that reduced monthly closing time by 89% and recovered BRL 50M in tax credits.
                    Experience centered on designing automation logic and coordinating multidisciplinary teams.
                    This analytical and complex problem-solving background now underpins my approach to software development,
                    ensuring solutions that deliver real and measurable business value.`,
      },
      {
        period: "09/2015 - 07/2017",
        role: "Accountant",
        description: `International experience with academic distinction (18/20 on the final project).
                    Focused on comprehensive financial data review and regulatory compliance.
                    Developed strong analytical rigor and structured process thinking,
                    transferring this attention to detail directly into high-quality software development.`,
      },
      {
        period: "06/2011 - 08/2015",
        role: "Senior Auditor",
        description: `Management of external audits and tax consulting projects for corporate clients.
                    Responsibilities included coordinating due diligence processes, reviewing financial statements,
                    and defining compliance strategies, ensuring adherence to both local and international standards.`,
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
      <section id="curriculum"
        class="grid grid-cols-1 grid-rows-[1fr] gap-y-2 min-h-0 max-h-screen overflow-hidden p-8">

        <div class="grid grid-cols-1 md:grid-cols-2 min-h-0 p-6 rounded-lg bg-base-100 space-y-10">

          <!-- Coluna esquerda -->
          <div class="flex flex-col items-center justify-center w-full h-full">
            <picture>
              <img
                src="assets/images/photos/profile-mobile.png"
                alt="Foto de perfil do Gabriel Panta"
                width="400"
              />
              <figcaption class="text-center text-lg font-semibold italic">
                Gabriel Panta, full-stack web developer.
              </figcaption>
            </picture>
          </div>

          <!-- Coluna direita -->
          <div class="max-h-full min-h-0 overflow-y-auto pr-4">

            <!-- Educação -->
            <section class="space-y-4 mb-8">
              <h3 data-i18n="education.title" class="text-lg font-semibold" ></h3>

              <div
                class="hidden md:grid grid-cols-[100px_4fr_3fr_3fr] gap-4 font-semibold text-sm border-b pb-2">
                <span data-i18n="education.headers.year"></span>
                <span data-i18n="education.headers.degree"></span>
                <span data-i18n="education.headers.institution"></span>
                <span data-i18n="education.headers.location"></span>
              </div>

              <div id="education-list"></div>
            </section>

            <!-- Experiência -->
            <section class="min-h-0 overflow-y-auto pr-2">
              <h3 data-i18n="experience.title" class="text-lg font-semibold"></h3>
              <hr />
              
              <ul id="experience-list" class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              </ul>
            </section>

          </div>
        </div>
      </section>
    `;
  }

  /* ---------------- CACHE ---------------- */

  cacheNodes() {
    this.i18nNodes = this.querySelectorAll("[data-i18n]");
    this.educationListEl = this.querySelector("#education-list");
    this.educationItems = null;

    this.experienceListEl = this.querySelector("#experience-list");
    this.experienceItems = null;
  }

  /* ---------------- UPDATE DOS TEXTOS ------------ */

  updateTexts() {
    const dict = this.translations[this.locale];

    this.i18nNodes.forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = dict[key] ?? "";
    });

    this.updateEducationItems();
    this.updateExperienceItems();
  }

  updateEducationItems() {
    const data = this.educationContent[this.locale];

    if (!this.educationItems) {
      this.educationItems = data.map(() => {
        const el = document.createElement("div");
        el.className =
          "grid gap-2 md:grid-cols-[100px_4fr_3fr_3fr] md:gap-4 p-4 md:p-0 bg-base-100 md:bg-transparent rounded-box shadow md:shadow-none";

        el.innerHTML = `
          <span class="period text-sm"></span>
          <span class="degree font-semibold"></span>
          <span class="institution"></span>
          <span class="location text-sm"></span>
        `;

        this.educationListEl.appendChild(el);
        return el;
      });
    }

    data.forEach((item, index) => {
      const el = this.educationItems[index];
      el.querySelector(".period").textContent = item.period;
      el.querySelector(".degree").textContent = item.degree;
      el.querySelector(".institution").textContent = item.institution;
      el.querySelector(".location").textContent = item.location;
    });
  }

  updateExperienceItems() {
    const data = this.experienceContent[this.locale];

    if (!this.experienceItems) {
      this.experienceItems = data.map((_, index) => {
        const li = document.createElement("li");

        // HR superior (exceto primeiro item)
        if (index !== 0) {
          li.appendChild(document.createElement("hr"));
        }

        // Ícone central
        const middle = document.createElement("div");
        middle.className = "timeline-middle";
        middle.innerHTML = /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      `;
        li.appendChild(middle);

        // Conteúdo
        const content = document.createElement("div");
        content.className =
          index % 2 === 0
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10";

        const time = document.createElement("time");
        time.className = "period font-mono italic";

        const role = document.createElement("div");
        role.className = "role text-lg font-black";

        const desc = document.createElement("div");
        desc.className = "description";

        content.append(time, role, desc);
        li.appendChild(content);

        // HR inferior (exceto último item)
        if (index !== data.length - 1) {
          li.appendChild(document.createElement("hr"));
        }

        this.experienceListEl.appendChild(li);
        return li;
      });
    }

    data.forEach((item, index) => {
      const el = this.experienceItems[index];
      el.querySelector(".period").textContent = item.period;
      el.querySelector(".role").textContent = item.role;
      el.querySelector(".description").textContent = item.description;
    });
  }
}
