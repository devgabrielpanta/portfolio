# Vanilla SPA - Portfólio Pessoal

Projeto final desenvolvido para o módulo **Fundamentos de Programação Web** do programa **UPSKILL**. O objetivo principal foi criar uma **Single Page Application (SPA)** robusta utilizando JavaScript puro (Vanilla JS), sem a dependência de frameworks reativos como React, Vue ou Angular.

## 📋 Sobre o Projeto

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

O projeto segue uma estrutura modular, separando componentes, páginas, contexto e lógica de roteamento.

```text
/src
  ├── components/
  │   ├── layout/
  │   │   └── header.js       # Componente de cabeçalho e navegação
  │   ├── home.js             # Página Inicial com i18n
  │   ├── curriculum.js       # Página de Currículo
  │   ├── portfolio.js        # Página de Portfólio
  │   └── contacto.js         # Página de Contato
  ├── context/
  │   └── appProvider.js      # Gerenciamento de estado global
  ├── router.js               # Lógica de roteamento da SPA
  └── main.js                 # Entry point e registro de componentes
index.html                    # Documento base