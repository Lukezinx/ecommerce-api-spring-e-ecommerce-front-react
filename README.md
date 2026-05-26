# 🛒 E-commerce Full-Stack - Front-end

Uma aplicação Front-end robusta, moderna e totalmente componentizada para um sistema de E-commerce, desenvolvida com **React** e **Redux Toolkit**. Este projeto consome uma API RESTful desenvolvida em **Spring Boot** e oferece uma experiência completa de usuário, dividida entre uma vitrine pública responsiva (Storefront) e um painel administrativo seguro com controle de acesso (Backoffice).

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema JavaScript/React moderno:

* **React (Vite):** Ambiente de desenvolvimento rápido e otimizado para a construção da interface SPAs.
* **Redux Toolkit:** Centralização do estado global da aplicação (Gerenciamento de Autenticação, Carrinho de Compras, Produtos e Categorias) com fluxo de dados unidirecional e previsível.
* **React Router DOM (v6):** Gerenciamento de rotas dinâmicas, separação de escopos públicos/privados e proteção de caminhos.
* **Tailwind CSS:** Framework utilitário para estilização rápida, garantindo uma interface responsiva, com tema escuro elegante e alta consistência visual.
* **Axios:** Cliente HTTP configurado com interceptadores para comunicação assíncrona com a API Spring Boot.

---

## ✨ Funcionalidades do Sistema

### 🛍️ Área do Cliente (Storefront)
* **Vitrine Dinâmica (`HomePage`):** Renderização automática dos produtos cadastrados no banco de dados através da integração com o Thunk de busca.
* **Carrinho de Compras em Memória (`cartSlice`):** Permite que qualquer usuário adicione itens, controle quantidades e limpe o carrinho. Os cálculos de valor total e quantidade de itens ocorrem em tempo real no Redux State, sem gerar requisições desnecessárias ao banco de dados antes da hora.
* **Notificação Fluida:** Indicador visual (badge) na barra de navegação (`Narbar`) que exibe a quantidade de itens no carrinho em tempo real com posicionamento absoluto.
* **Histórico de Compras Simulados (`OrdersPage`):** Exibição dos pedidos anteriores do usuário em um layout limpo utilizando cartões dedicados.

### ⚙️ Painel Administrativo (Backoffice)
* **Controle de Acesso Baseado em Cargos (RBAC):** Proteção estrutural na rota do Front-end através do componente inteligente `ProtectedRoute`. Caso um usuário comum tente digitar caminhos administrativos na URL, o sistema o redireciona automaticamente para a Home.
* **Gerenciamento de Produtos (`ProductPage` / `ProductFormPage`):** CRUD completo para a administração do catálogo. O formulário lida com validações em tempo real (como impedir preços ou estoques negativos) e popula os seletores dinamicamente a partir das categorias do banco.
* **Gerenciamento de Categorias (`CategoryPage`):** Interface unificada contendo um formulário reativo para criação/edição no lado esquerdo e uma tabela com paginação implícita no lado direito. Possui tratamento visual de erros para falhas de restrição de integridade (como chaves estrangeiras no PostgreSQL).

---

## 📐 Arquitetura de Componentes (Clean Code)

A aplicação foi refatorada seguindo a convenção **Smart vs. Dumb Components**, garantindo alta capacidade de manutenção e testes:

```
src/
├── api/
│   └── axiosConfig.js       # Configuração base do Axios e endpoints
├── components/              # Dumb Components (Apenas renderizam HTML via Props)
│   ├── AdminProductCard.jsx
│   ├── CategoryForm.jsx
│   ├── CategoryTable.jsx
│   ├── InputField.jsx
│   ├── Narbar.jsx
│   ├── OrderCard.jsx
│   └── ProductForm.jsx
├── pages/                   # Smart Components (Cérebros: Redux, Thunks e Estado)
│   ├── CartPage.jsx
│   ├── CategoryPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── OrdersPage.jsx
│   ├── ProductFormPage.jsx
│   └── RegisterPage.jsx
└── store/                   # Configuração Central do Redux Toolkit
    ├── slice/               # Slices Síncronos (authSlice, cartSlice, etc.)
    └── thunks/              # Requisições Assíncronas (Spring Boot API)
```

---

## 🔒 Segurança & Ciclo de Vida da Sessão

1.  **Persistência Local:** Ao efetuar o login com sucesso através do `authLogin.fulfilled`, o token JWT, o e-mail e a Role (`ADMIN` ou `USER`) do usuário são guardados simultaneamente no Redux e no `localStorage`.
2.  **Sessão Contínua:** No carregamento inicial do aplicativo, o estado é populado diretamente a partir do armazenamento local, evitando que o usuário precise logar novamente após atualizar a página.
3.  **Logout Seguro:** A action `clearToken` realiza a limpeza atômica de todas as variáveis de estado e limpa os registros do navegador, redirecionando o cliente para a tela inicial.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js** instalado (v18 ou superior recomendado).
* **Back-end (API Spring Boot)** rodando na porta padrão do seu ecossistema.

### Passos para Inicialização

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até a pasta do front-end:**
    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências de pacotes:**
    ```bash
    npm install
    ```

4.  **Inicie o ambiente de desenvolvimento local:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    Abra o link gerado pelo Vite, geralmente [http://localhost:5173](http://localhost:5173).

---

## 👨‍💻 Autor

Desenvolvido com foco em boas práticas de engenharia de software por:

* **GitHub:** [Lucas](https://github.com/Lukezinx?tab=repositories)
* **LinkedIn:** [Lucas](https://www.linkedin.com/in/lucas-luke/)
