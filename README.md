# 🐾 Instituto Patas & Laços - Plataforma Web (SPA)

> **Resgatando vidas, reconstruindo lares.** Uma Single Page Application (SPA) desenvolvida para otimizar a gestão de projetos, atração de voluntários e captação de recursos para o ecossistema de proteção animal.

## 📖 Sobre o Projeto
Esta aplicação front-end foi construída para modernizar a presença digital do Instituto Patas & Laços. A plataforma permite navegação fluida sem recarregamento da página, apresentação dinâmica de campanhas e retenção contínua do histórico de doações do usuário, garantindo uma experiência interativa e acessível.

## ✨ Funcionalidades Principais
* **Roteamento Dinâmico (SPA):** Navegação instantânea entre as seções (Início, Projetos, Voluntariado, Doações) utilizando JavaScript Vanilla para manipular o DOM.
* **Persistência de Dados:** Uso do `localStorage` para salvar informações de sessão e interações do usuário.
* **Renderização de Componentes:** Geração automática de cartões de projetos e vagas via *Template Literals*.
* **Feedback Visual e Interativo:** Integração com modais contextuais, notificações flutuantes (Toasts) e animações de celebração (Canvas-Confetti) após conversões.
* **Design Responsivo:** Layout adaptável para smartphones, tablets e desktops seguindo a metodologia *Mobile-First*.

## 🛠️ Tecnologias Utilizadas
A arquitetura do projeto prioriza a performance e a coesão visual sem dependência inicial de frameworks pesados:
* **HTML5:** Estrutura estritamente semântica e acessível.
* **CSS3:** Arquitetura baseada em variáveis globais (`:root`), CSS Grid Layout, Flexbox e metodologia BEM para escopo de classes.
* **JavaScript (ES6+):** Lógica modularizada, interceptação de eventos, e manipulação avançada da árvore do DOM.
* **Git e GitHub:** Versionamento semântico seguindo o padrão **GitFlow** (com branches `main`, `develop` e `feature/`).

## ⚙️ Pré-requisitos e Execução
Como o projeto foi desenvolvido com tecnologias nativas da web (Vanilla), não há necessidade de instalação de dependências ou Node.js. 

Para executar o projeto localmente:
1. Clone o repositório:
   ```bash
   git clone git@github.com:WeltonSantosFr/CS-Front-End-Development.git
   ```
2. Abra a pasta do projeto no seu editor de código (ex: VS Code).
3. Utilize a extensão Live Server para iniciar um servidor local, ou simplesmente abra o arquivo index.html diretamente em qualquer navegador moderno.

## 📂 Estrutura de Arquivos
O projeto segue o Princípio da Responsabilidade Única (SRP), separando marcação, estilo e comportamento:
```Plaitext
/
├── index.html       # Casca semântica e ponto de entrada da SPA
├── style.css        # Design System e regras visuais (Tokens, Grid, Responsividade)
└── /js
    ├── main.js      # Ponto de orquestração e inicialização
    ├── router.js    # Lógica de roteamento e navegação
    ├── ui.js        # Geração de templates e manipulação visual
    └── storage.js   # Interações de leitura/gravação no banco do navegador
```
Desenvolvido por Welton Santos como requisito prático acadêmico para o curso de Ciência da Computação.
