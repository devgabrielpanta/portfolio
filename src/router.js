import { AppHome } from "./components/home.js";
import { AppCurriculum } from "./components/curriculum.js";
import { AppPortfolio } from "./components/portfolio.js";
import { AppContacto } from "./components/contacto.js";

customElements.define("app-home", AppHome);
customElements.define("app-curriculum", AppCurriculum);
customElements.define("app-portfolio", AppPortfolio);
customElements.define("app-contacto", AppContacto);

export class AppRouter extends HTMLElement {
  route = "home";
  provider;

  connectedCallback() {
    this.provider = this.closest("app-provider");
    this.provider?.subscribe(this);

    this.syncRouteWithUrl();

    window.addEventListener("popstate", this.handlePopState);
  }

  disconnectedCallback() {
    this.provider?.unsubscribe(this);
    window.removeEventListener("popstate", this.handlePopState);
  }

  handlePopState = () => {
    console.log("Popstate event detected");
    this.syncRouteWithUrl();
  };

  syncRouteWithUrl() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";

    this.route = page;
    this.setContent();
  }

  onRouteChange(route) {
    this.route = route;
    this.updateUrl();
    this.setContent();
  }

  updateUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set("page", this.route);

    window.history.pushState({}, "", url);
  }

  setContent() {
    const main = document.getElementById("main");
    let content;
    switch (this.route) {
      case "home":
        content = "<app-home></app-home>";
        break;
      case "curriculum":
        content = `<app-curriculum></app-curriculum>`;
        break;
      case "portfolio":
        content = "<app-portfolio></app-portfolio>";
        break;
      case "contactos":
        content = "<app-contacto></app-contacto>";
        break;
      default:
        content = "<app-home></app-home>";
    }
    main.innerHTML = content;
  }
}
