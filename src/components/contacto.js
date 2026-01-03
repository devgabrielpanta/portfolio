export class AppContacto extends HTMLElement {
  locale = "pt";
  provider;

  translations = {
    pt: {
      title: "Contactos",
    },
    en: {
      title: "Contacts",
    },
  };

  /* ---------------- CALLBACKS E EVENTOS ---------------- */

  connectedCallback() {
    this.render();
    this.cacheNodes();
    this.updateTexts();
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

  /* ---------------- RENDER ESTÁTICO ---------------- */
  render() {
    this.innerHTML = /* html */ `
        <section id="portfolio"
            class="
            flex flex-col
            md:grid md:grid-cols-2
            min-h-[90vh]
            md:h-[90vh] md:min-h-0
            gap-10 m-8 p-6
            bg-base-100 rounded-lg
            "
        >
            <!-- Coluna esquerda -->
            <div class="flex flex-col items-center justify-center">
              <picture>
                <img
                  src="assets/images/photos/contacto.png"
                  alt="Gabriel Panta no telefone sorrindo para o lado"
                  width="400"
                />
                <figcaption data-i18n="title" class="text-center text-lg font-semibold italic">
                </figcaption>
              </picture>
            </div>

            <!-- Coluna direita -->
            <div id="contacto-element"
              class="
                flex flex-col w-full
                justify-center
                min-h-0
                md:h-full
                md:overflow-y-auto
                pr-4
              "
            >
                <ul class="list items-center md:items-start bg-base-200 rounded-box shadow-md">
                    <!-- Contact Info -->
                    <li class="list-row items-center">
                        <div><img class="size-6 rounded-box bg-white" src="assets/images/icons/whatsapp.svg" /></div>
                        <a href="https://wa.me/351927540803" target="_blank" class="text-xs font-semibold">+351 927 540 803</a>
                    </li>

                    <li class="list-row items-center">
                        <div><img class="size-6 rounded-box bg-white p-1" src="assets/images/icons/email.svg" /></div>
                        <a href="mailto:gabrielpanta.dev@gmail.com" target="_blank" class="text-xs font-semibold">gabrielpanta.dev@gmail.com</a>
                    </li>
                  
                    <!-- Social -->
                    <li class="list-row items-center">
                        <div class="flex flex-row gap-2">
                            <a href="https://www.linkedin.com/in/gabriel-panta-639413127/" target="_blank">
                                <img class="size-6 rounded-box bg-white" src="assets/images/logotipos/linkedin.svg" alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/gabrielpanta/" target="_blank">
                                <img class="size-6 rounded-box bg-white" src="assets/images/logotipos/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://github.com/devgabrielpanta" target="_blank">
                                <img class="size-6 rounded-box bg-white" src="assets/images/logotipos/github.svg" alt="GitHub" />
                            </a>
                        </div>
                    </li>

                    <!-- Maps -->
                    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Based in Seixal, Portugal</li>
                    <li class="list-row items-center">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24929.323340956944!2d-9.10599710502802!3d38.64507664044472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19360f8f607403%3A0xc2e28857d64dd2b3!2sSeixal!5e0!3m2!1spt-PT!2spt!4v1765538578304!5m2!1spt-PT!2spt"
                        width="100%"
                        height="350"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </li>
                </ul>
            </div>
        </section>
    `;
  }

  /* ---------------- CACHE ---------------- */

  cacheNodes() {
    this.i18nNodes = this.querySelectorAll("[data-i18n]");
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
