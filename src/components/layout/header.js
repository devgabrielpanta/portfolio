import { AppNav } from "./navbar.js";
import { AppTheme } from "./theme.js";
import { AppLocale } from "./locale.js";

customElements.define("app-nav", AppNav);
customElements.define("app-theme", AppTheme);
customElements.define("app-locale", AppLocale);

export class AppHeader extends HTMLElement {
  route = "home";
  isMenuOpen = false;
  provider;

  constructor() {
    super();
    this.isMenuOpen = false;
  }

  connectedCallback() {
    this.render();
    this.cacheElements();
    this.provider = this.closest("app-provider");
    this.provider?.subscribe(this);
  }

  disconnecctedCallback() {
    this.provider?.unsubscribe(this);
  }

  cacheElements() {
    this.drawerToggle = this.querySelector("#my-drawer-3");
  }

  onRouteChange(route) {
    this.route = route;
    this.closeDrawer();
  }

  closeDrawer() {
    if (this.drawerToggle) {
      this.drawerToggle.checked = false;
    }
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="drawer lg:drawer-open min-h-screen">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

        <!-- Conteúdo principal -->
        <div class="drawer-content flex flex-col">

          <!-- Header -->
          <header class="navbar bg-base-200 px-4 md:hidden">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <div class="flex-1">
              <span class="text-lg font-bold">My SaaS</span>
            </div>
          </header>

          <!-- Grid do conteúdo -->
          <main id="main" class="flex w-full h-full max-h-screen overflow-hidden bg-base-300">
          </main>

        </div>

        <!-- Sidebar -->
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <aside class="grid grid-cols-1 grid-rows-[40px_1fr_40px] bg-neutral w-60 min-h-full p-4">
            <div class="flex-1">
              <span class="text-lg font-bold">My SaaS</span>
            </div>  
            <app-nav></app-nav>
            <div class="flex flex-row justify-center items-center gap-2">
              <app-locale></app-locale>
              <app-theme></app-theme>
            </div>
          </aside>
        </div>
        
      </div>
    `;
  }
}
