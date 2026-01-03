export class AppHome extends HTMLElement {
  locale = "pt";
  provider;

  /* ---------------- TEXTOS DA PÁGINA ---------------- */

  translations = {
    pt: {
      "btn.curriculo": "Ver Currículo",
      "btn.portfolio": "Ver Portfólio",
      "p.content":
        "Web developer pós-graduando em Front-end Engineering e em especialização em Gestão de Sistemas de Informação. Atuo no desenvolvimento de aplicações web modernas e escaláveis, unindo base técnica sólida, visão de negócio e experiência prévia em áreas analíticas para criar soluções que aumentam a eficiência das organizações e elevam a experiência dos utilizadores.",
    },
    en: {
      "btn.curriculo": "See Curriculum",
      "btn.portfolio": "See Portfolio",
      "p.content":
        "Web developer pursuing a postgraduate degree in Front-end Engineering and specialization in Information Systems Management. I work on developing modern and scalable web applications, combining a solid technical foundation, business vision, and previous experience in analytical areas to create solutions that enhance organizational efficiency and elevate user experience.",
    },
  };

  /* ---------------- CALLBACKS E EVENTOS ---------------- */

  connectedCallback() {
    this.render();
    this.cacheNodes();
    this.updateTexts();
    this.bindEvents();

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

  bindEvents() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const route = link.getAttribute("data-route");
        this.provider?.setRoute(route);
      });
    });
  }

  /* ---------------- RENDER ESTÁTICO ---------------- */
  render() {
    this.innerHTML = /* html */ `
      <div class="hero bg-base-300 min-h-screen w-full md:w-[800px] m-auto">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="assets/images/photos/home.png"
            class="max-w-sm rounded-lg shadow-2xl"
            width="300"
            alt="Foto de perfil do Gabriel Panta"
            fetchpriority="high"
            loading="eager"
          />
          <div>
            <h1 class="text-2xl font-bold text-center md:text-left">
              Gabriel Panta,<br>full-stack web developer
            </h1>
            <p data-i18n="p.content" class="py-6 text-center md:text-left"></p>
            <div class="flex flex-row justify-center md:justify-start items-center gap-4">
              <button data-route="curriculum" data-i18n="btn.curriculo" class="btn btn-primary">
              </button>
              <button data-route="portfolio" data-i18n="btn.portfolio" class="btn btn-neutral">
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  cacheNodes() {
    this.i18nNodes = this.querySelectorAll("[data-i18n]");
    this.navLinks = this.querySelectorAll("button");
  }

  updateTexts() {
    const dict = this.translations[this.locale];

    this.i18nNodes.forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = dict[key] ?? "";
    });
  }
}
