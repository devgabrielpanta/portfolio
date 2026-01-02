export class AppPortfolio extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  cacheElements() {
    this.cards = this.querySelectorAll("li");
  }

  bindEvents() {
    this.cards.forEach((card) => {
      card.addEventListener("dragstart", (event) =>
        this.handleDragStart(event)
      );
      card.addEventListener("dragover", (event) => this.handleDragOver(event));
      card.addEventListener("drop", (event) => this.handleDrop(event));
    });
  }

  handleDragStart(event) {
    console.log("Drag started");
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  handleDragOver(event) {
    console.loog("Drag over");
    event.preventDefault();
  }

  handleDrop(event) {
    console.log("Drop event");
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    const dropTarget = event.target;
    dropTarget.appendChild(draggedElement);
  }

  render() {
    this.innerHTML = /* html */ `
        <section id="portfolio">
            <nav class="flex flex-row justify-center items-center w-full gap-4 list-none">
                <li><button class="btn btn-primary btn-outline">Single Page Application (SPA)</button></li>
                <li><button class="btn btn-primary btn-outline">Multi-tenant App</button></li>
                <li><button class="btn btn-primary btn-outline">Headless CMS</button></li>
                <li><button class="btn btn-primary btn-outline">WordPress</button></li>
            </nav>

            <div>
                <p>Autenticação</p>
                <p>Visualização de dados</p>

            </div>
        </section>
    `;
  }
}
