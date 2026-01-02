export class AppCurriculum extends HTMLElement {
  title = "Currículo";

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `

      <section id="curriculum" class="grid grid-cols-1 grid-rows-[40px_1fr] gap-y-2 min-h-0 max-h-screen overflow-hidden p-8">
        
        <h2 class="">${this.title}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 min-h-0 p-6 rounded-lg bg-base-100">

          <!-- Coluna da esquerda -->
          <div class="flex flex-col items-center justify-center gap-4">

            <h3 class="text-2xl font-bold">Currículo</h3>
            <p>Reproduza o vídeo abaixo para assistir uma apresentação profissional</p>
            
            <video
              class="w-full max-w-md rounded-lg shadow-xl shadow-neutral-800"
              controls
              poster="assets/images/thumbnails/sample.jpg"
            >
              <source src="assets/videos/sample.mp4" type="video/mp4" />
              O seu navegador nao suporta vídeo.
            </video>
          </div>

          <!-- Coluna da direita -->
          <div class="max-h-full min-h-0 overflow-y-auto pr-4">
            <!-- Experiência profissional -->
            <div class="min-h-0 overflow-y-auto pr-2">
              <h3 class="text-lg font-semibold">Experiência profissional</h3>
              <hr />
              <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono italic">1984</time>
                    <div class="text-lg font-black">First Macintosh computer</div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                    mouse.
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end md:mb-10">
                    <time class="font-mono italic">1998</time>
                    <div class="text-lg font-black">iMac</div>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                    been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                    and has evolved through seven distinct forms
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono italic">2001</time>
                    <div class="text-lg font-black">iPod</div>
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-end md:mb-10">
                    <time class="font-mono italic">2007</time>
                    <div class="text-lg font-black">iPhone</div>
                    iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                    operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                    January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                    of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                    accounts for 15.6% of global smartphone market share
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="timeline-start mb-10 md:text-end">
                    <time class="font-mono italic">2015</time>
                    <div class="text-lg font-black">Apple Watch</div>
                    The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                    tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                    iOS and other Apple products and services
                  </div>
                </li>
              </ul>
            </div>

            <!-- Formação acadêmica -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Formação acadêmica</h3>

              <div class="hidden md:grid grid-cols-[100px_4fr_3fr_3fr] gap-4 font-semibold text-sm text-gray-500 border-b pb-2">
                <span>Ano</span>
                <span>Grau</span>
                <span>Instituição</span>
                <span>Localização</span>
              </div>

              <div class="grid gap-2 md:grid-cols-[100px_4fr_3fr_3fr] md:gap-4 p-4 md:p-0 bg-base-100 md:bg-transparent rounded-box shadow md:shadow-none">
                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  2025 - 2027
                </span>

                <span class="font-semibold">
                  Mestrado em Gestão de Sistemas de Informação
                </span>

                <span>
                  Universidade NOVA de Lisboa
                </span>

                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  Lisboa, Portugal
                </span>
              </div>

              <div class="grid gap-2 md:grid-cols-[100px_4fr_3fr_3fr] md:gap-4 p-4 md:p-0 bg-base-100 md:bg-transparent rounded-box shadow md:shadow-none">
                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  2025 - 2026
                </span>

                <span class="font-semibold">
                  Pós-Graduação em Front-end Engineering
                </span>

                <span>
                  FIAP
                </span>

                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  São Paulo, Brasil (online)
                </span>
              </div>

              <div class="grid gap-2 md:grid-cols-[100px_4fr_3fr_3fr] md:gap-4 p-4 md:p-0 bg-base-100 md:bg-transparent rounded-box shadow md:shadow-none">
                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  2011 - 2016
                </span>

                <span class="font-semibold">
                  Bacharelado e Licenciatura em Contabilidade
                </span>

                <span>
                  Brasil e Portugal
                </span>

                <span class="text-sm text-gray-500 md:text-base md:text-black">
                  
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>
    `;
  }
}
