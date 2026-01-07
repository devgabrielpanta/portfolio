# Vanilla SPA - Portfólio Pessoal

## 👨‍💻 Developer
* Gabriel Panta: [@devgabrielpanta](https://www.github.com/devgabrielpanta)

## 🔗 Links Úteis
* [Repositório.](https://github.com/devgabrielpanta/portfolio)
* [Live Demo.](https://devgabrielpanta.github.io/portfolio/)


## 📋 Sobre o Projeto
Projeto final desenvolvido para o módulo **Fundamentos de Programação Web** do programa **UPSKILL**. O objetivo principal foi criar uma **Single Page Application (SPA)** robusta utilizando JavaScript puro (Vanilla JS), sem a dependência de bibliotecas/frameworks como React, de forma a aprofundar o conhecimento e experiência com web components.

Este projeto é um site de portfólio pessoal que demonstra a implementação de uma arquitetura baseada em componentes nativos da web. A aplicação gerencia suas próprias rotas, estado e renderização, oferecendo uma experiência de navegação fluida e sem recarregamentos de página (refresh).

### Funcionalidades Principais
* **SPA (Single Page Application):** Navegação dinâmica onde o conteúdo é atualizado via JavaScript.
* **Web Components Nativos:** Utilização de `HTMLElement` e `customElements.define` para encapsulamento e modularização.
* **Roteamento Personalizado:** Classe `AppRouter` que manipula o `window.history` e renderiza componentes com base na URL.
* **Internacionalização (i18n):** Sistema de tradução (PT/EN) implementado via atributos `data-i18n` e dicionários de objetos.
* **Interface Moderna:** Estilização com TailwindCSS e componentes DaisyUI.

## 🚀 Tecnologias Utilizadas

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **Vanilla JS (ES6 Modules)**
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **TailwindCSS**
* ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white) **DaisyUI**

## 📂 Arquitetura do Projeto
```text
/src
  ├── components/
  │   ├── layout/
  │   │   └── header.js       # Cabeçalho - componente pai
  │   │   └── locale.js       # Dropdown seletor de idioma PT/EN
  │   │   └── navbar.js       # Menus de nagegação
  │   │   └── theme.js        # Swap de light/dark theme  
  │   ├── home.js             # Página Inicial
  │   ├── curriculum.js       # Página de Currículo
  │   ├── portfolio.js        # Página de Portfólio
  │   └── contacto.js         # Página de Contato
  ├── context/
  │   └── appProvider.js      # Gerenciamento de estado global
  ├── router.js               # Lógica de roteamento da SPA
  └── main.js                 # Entry point e registro de componentes
index.html                    # Documento base
README.md            # Documentação do projeto
```
* O projeto segue uma estrutura modular, separando componentes, páginas, contexto e lógica de roteamento.
* Parecido com aplicações em React, o index.html tem uma div com o id "root" e utiliza o main.js para inicializar o sistema com o header e o router.
* O header do DaisyUI monta a estrutura com o header, sidebar e a tag main.
* O router manipula o innerHTML da tag main consoante a rota que é selecionada pela sidebar e/ou botões, montando o conteúdo (home.js, curriculum.js, portfolio.js ou contacto.js) sem a necessidade de recarregar a página - usando url's query (ex.: ?page=home).

## 🧩 Arquitetura dos componentes
Cada web component é um objeto que se torna um custom element, composto por atributos e métodos como os exemplificados a seguir:
```javascript

export class AppHeader extends HTMLElement {
  // Atributos do objeto
  route = "home";
  isMenuOpen = false;
  provider;

   // Método executado quando o elemento é adicionado na página para montar o componente
  connectedCallback() {
    this.render();
    this.cacheElements();
    this.provider = this.closest("app-provider");
    this.provider?.subscribe(this);
  }

   // Método executado quando o elemento é removido da página
  disconnecctedCallback() {
    this.provider?.unsubscribe(this);
  }

  // Armazena elementos de forma acessível e reutilizável
  cacheElements() {
    this.drawerToggle = this.querySelector("#my-drawer-3");
    this.logotipo = this.querySelectorAll("[img-logo]");
  }

  // Método que é chamado pelo context/provider (comum entre componentes) 
  onRouteChange(route) {
    this.route = route;
    this.closeDrawer();
  }

  // Método específico do presente objeto
  closeDrawer() {}

  // Método que constrói o HTML do componente
  render() {
    this.innerHTML = "(...)"
    }
}
``` 

## 🚀 Como Executar o Projeto
* **1. Live Server:** este projeto utiliza ES Modules então não é possível abrir o ficheiro index.html diretamente, se fazendo necessário utilizar um servidor local:

    * Instale a extensão Live Server no VS Code.
    * Abra o ficheiro index.html.
    * Clique em "Go Live" no canto inferior direito.
* **2. Extensões**: o HTML é gerado por JavaScript com document.createElement(), mas também modificando diretamente o html com element.innerHTML:
    ```javascript
    const el = document.createElement("div");
    el.innerHTML = /* html */ `
        <span class="period text-sm"></span>
        <span class="degree font-semibold"></span>
        <span class="institution"></span>
        <span class="location text-sm"></span>
    `;
    ```
Nesse último caso, para otimizar a visualização das tags dentro de código JavaScript, recomenda-se a instalação da extensão [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) para os utilizadores do VScode ou similares em outros editores de código.