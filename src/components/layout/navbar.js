export class AppNav extends HTMLElement {
  locale = "pt";
  provider;

  translations = {
    pt: {
      home: "Home",
      curriculum: "Currículo",
      portfolio: "Portfólio",
      contactos: "Contactos",
    },
    en: {
      home: "Home",
      curriculum: "Curriculum",
      portfolio: "Portfolio",
      contactos: "Contacts",
    },
  };

  /* ---------------- CALLBACKS E EVENTOS ---------------- */

  connectedCallback() {
    this.render();
    this.cacheElements();
    this.updateTexts();
    this.bindEvents();

    this.provider = this.closest("app-provider");
    this.provider?.subscribe(this);
  }

  disconnectedCallback() {
    this.provider?.unsubscribe(this);
  }

  cacheElements() {
    this.navLinks = this.querySelectorAll("a");
    this.i18nNodes = this.querySelectorAll("[data-i18n]");
  }

  bindEvents() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const route = link.getAttribute("href").substring(1);
        this.provider?.setRoute(route);
      });
    });
  }

  onLocaleChange(locale) {
    this.locale = locale;
    this.updateTexts();
  }

  onRouteChange(route) {
    this.navLinks.forEach((link) => {
      const linkRoute = link.getAttribute("href").substring(1);
      if (linkRoute === route) {
        link.className = "btn btn-soft btn-primary w-full";
      } else {
        link.className = "btn btn-ghost w-full";
      }
    });
  }

  /* ---------------- RENDER ESTÁTICO ---------------- */
  render() {
    this.innerHTML = /* html */ `
      <ul class="menu gap-4 w-full my-10">
        <li>
          <a href="#home">
            <!-- Home -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10" />
            </svg>
            <span data-i18n="home"></span>
          </a>
        </li>

        <li>
          <a href="#curriculum">
            <!-- Curriculum -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
            <span data-i18n="curriculum"></span>
          </a>
        </li>

        <li>
          <a href="#portfolio">
            <!-- Portfolio -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m4 0H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
            </svg>
            <span data-i18n="portfolio"></span>
          </a>
        </li>

        <li>
          <a href="#contactos">
            <!-- Contact -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            <span data-i18n="contactos"></span>
          </a>
        </li>
      </ul>

        `;
  }

  /* ---------------- UPDATE DOS TEXTOS ------------ */

  updateTexts() {
    const dict = this.translations[this.locale];

    this.i18nNodes.forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = dict[key] ?? "";
    });
  }
}
