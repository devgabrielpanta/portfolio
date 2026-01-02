export class AppNav extends HTMLElement {
  locale = "pt";
  provider;

  connectedCallback() {
    this.render();
    this.cacheElements();
    this.bindEvents();

    // Busca o provider mais próximo na árvore
    this.provider = this.closest("app-provider");

    // Sincroniza com o estado inicial
    this.provider?.subscribe(this);
  }

  disconnectedCallback() {
    this.provider?.unsubscribe(this);
  }

  cacheElements() {
    this.navLinks = this.querySelectorAll("a");
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
    this.setContent();
  }

  setContent() {
    const navObj = {
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

    this.navLinks.forEach((link) => {
      const key = link.getAttribute("href").substring(1);
      link.textContent = navObj[this.locale][key];
    });
  }

  render() {
    this.innerHTML = /* html */ `
      <ul class="flex flex-col gap-4 justify-center items-center my-10">
        <li class="text-white text-left w-full"><a href="#home">Home</a></li>  
        <li class="text-white text-left w-full"><a href="#curriculum">Currículo</a></li>
        <li class="text-white text-left w-full"><a href="#portfolio">Portfólio</a></li>
        <li class="text-white text-left w-full"><a href="#contactos">Contactos</a></li>
      </ul>
        `;
  }
}
