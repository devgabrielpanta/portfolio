export class AppLocale extends HTMLElement {
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
    // Limpeza ao remover do DOM
    this.provider?.unsubscribe(this);
  }

  onLocaleChange(locale) {
    this.locale = locale;
    this.setFlag();
    this.closeDropdown();
    document.documentElement.setAttribute("lang", locale);
  }

  cacheElements() {
    this.localeWrapper = this.querySelector("#locale-wrapper");
    this.localeFlag = this.querySelector("#locale-flag");
    this.btnPt = this.querySelector("#locale-pt");
    this.btnEn = this.querySelector("#locale-en");
  }

  bindEvents() {
    this.btnPt.addEventListener("click", () => this.provider.setLocale("pt"));
    this.btnEn.addEventListener("click", () => this.provider.setLocale("en"));
  }

  setFlag() {
    const flagObj = {
      pt: {
        src: "assets/images/icons/flag-br.svg",
        alt: "PT",
      },
      en: {
        src: "assets/images/icons/flag-en.svg",
        alt: "EN",
      },
    };

    const { src, alt } = flagObj[this.locale];
    this.localeFlag.src = src;
    this.localeFlag.alt = alt;
  }

  closeDropdown() {
    this.localeWrapper.removeAttribute("open");
  }

  render() {
    this.innerHTML = /* html */ `
      <details id="locale-wrapper" class="dropdown dropdown-top dropdown-center">
        <summary class="btn m-1">
          <img id="locale-flag" src="assets/images/icons/flag-br.svg" width="24" height="auto" alt="PT" />
        </summary>
        
        <ul class="dropdown-content menu bg-base-100 rounded-box z-1 w-16 p-2 shadow-sm">
          <li><a id="locale-pt"><img src="assets/images/icons/flag-br.svg" width="24" height="auto" alt="PT" /></a></li>
          <li><a id="locale-en"><img src="assets/images/icons/flag-en.svg" width="24" height="auto" alt="EN" /></a></li>
        </ul>
      </details>
    `;
  }
}
