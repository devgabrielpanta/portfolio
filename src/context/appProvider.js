export class AppProvider extends HTMLElement {
  locale = "pt";
  route = "home";
  theme = "light";
  subscribers = new Set();

  connectedCallback() {
    this.locale = "pt";
    this.route = "home";
    this.theme = "light";
  }

  setLocale(locale) {
    this.locale = locale;
    this.dispatchLocaleChange();
  }

  setRoute(route) {
    this.route = route;
    this.dispatchRouteChange();
  }

  setTheme(theme) {
    this.theme = theme;
    this.dispatchThemeChange(theme);
  }

  subscribe(component) {
    this.subscribers.add(component);
    component.onLocaleChange?.(this.locale);
    component.onRouteChange?.(this.route);
  }

  unsubscribe(component) {
    this.subscribers.delete(component);
  }

  dispatchLocaleChange() {
    this.subscribers.forEach((component) => {
      component.onLocaleChange?.(this.locale);
    });
  }

  dispatchRouteChange() {
    this.subscribers.forEach((component) => {
      component.onRouteChange?.(this.route);
    });
  }

  dispatchThemeChange(theme) {
    this.subscribers.forEach((component) => {
      component.onThemeChange?.(theme);
    });
  }
}
