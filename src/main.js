import { AppHeader } from "./components/layout/header.js";
import { AppProvider } from "./context/appProvider.js";
import { AppRouter } from "./router.js";

customElements.define("app-provider", AppProvider);
customElements.define("app-header", AppHeader);
customElements.define("app-router", AppRouter);

const root = document.getElementById("root");
root.innerHTML = /* html */ `
  <app-provider>
    <app-header></app-header>
    <app-router></app-router>
  </app-provider>
`;
