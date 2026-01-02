export class AppHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section id="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing section of the application.</p>
      </section>
    `;
  }
}