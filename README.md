# Estudo React

Repositório contendo projetos de estudo sobre React, desenvolvidos para aprender os conceitos fundamentais e avançados da biblioteca.

## Projetos

### 1. dummy-backend
Backend simples em Express.js para simular uma API REST de posts.

**Tecnologias:**
- Express.js
- Body-parser
- CORS habilitado

**Endpoints:**
- `GET /posts` - Lista todos os posts (com delay de 1.5s para simular latência)
- `GET /posts/:id` - Busca um post específico por ID
- `POST /posts` - Cria um novo post

**Como executar:**
```bash
cd dummy-backend
npm install
npm start
```
Servidor rodando em: `http://localhost:8080`

---

### 2. react-crash-course
Projeto inicial de estudo dos fundamentos do React.

**Conceitos estudados:**
- Componentes funcionais
- Props
- Estado com useState
- Efeitos colaterais com useEffect
- Renderização condicional
- Listas e keys
- Estilização com CSS Modules

**Tecnologias:**
- React 18
- Vite
- CSS Modules

**Como executar:**
```bash
cd react-crash-course
npm install
npm run dev
```

---

### 3. react-crash-coruse-v2
Versão avançada do projeto com implementação de roteamento e integração com API.

**Conceitos estudados:**
- React Router v6
  - createBrowserRouter
  - RouterProvider
  - Nested Routes (rotas aninhadas)
  - Outlet para renderização de rotas filhas
- Loaders para carregamento de dados
- Actions para manipulação de formulários
- useLoaderData hook
- useNavigate hook
- Link component
- Form component do React Router
- Integração com API REST
- Modais e navegação programática

**Estrutura de Rotas:**
```
/ (RootLayout)
  └── / (Posts)
      ├── /create-post (NewPost)
      └── /:id (PostDetails)
```

**Componentes principais:**
- `MainHeader` - Cabeçalho com navegação
- `PostsList` - Lista de posts com dados do loader
- `Post` - Card individual de post
- `Modal` - Modal reutilizável para sobreposição

**Rotas:**
- `RootLayout` - Layout principal da aplicação
- `Posts` - Página de listagem de posts
- `NewPost` - Formulário de criação de post
- `PostDetails` - Detalhes de um post específico

**Tecnologias:**
- React 18
- React Router DOM v6
- Vite
- CSS Modules

**Como executar:**
```bash
cd react-crash-coruse-v2
npm install
npm run dev
```

---

### 4. react-crash-course-challenge-01
Projeto de desafio para praticar os conceitos aprendidos.

**Tecnologias:**
- React 18
- Vite
- CSS Modules

**Como executar:**
```bash
cd react-crash-course-challenge-01
npm install
npm run dev
```

---

## 🎯 Conceitos Principais Estudados

### Fundamentos React
- ✅ Componentes funcionais
- ✅ JSX
- ✅ Props e prop drilling
- ✅ Estado (useState)
- ✅ Efeitos colaterais (useEffect)
- ✅ Renderização condicional
- ✅ Listas e keys
- ✅ Event handlers
- ✅ Formulários controlados

### React Router
- ✅ Configuração de rotas com createBrowserRouter
- ✅ Navegação com Link e useNavigate
- ✅ Rotas aninhadas (Nested Routes)
- ✅ Outlet para renderização de rotas filhas
- ✅ Loaders para carregamento de dados
- ✅ Actions para manipulação de formulários
- ✅ useLoaderData para acessar dados do loader
- ✅ Parâmetros de rota dinâmicos

### Integração com API
- ✅ Fetch API
- ✅ Requisições GET e POST
- ✅ Tratamento de dados assíncronos
- ✅ Loading states

### Estilização
- ✅ CSS Modules
- ✅ Estilos escopados por componente
- ✅ Classes dinâmicas

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server
- **React Router DOM v6** - Roteamento para aplicações React
- **Express.js** - Framework Node.js para backend
- **CSS Modules** - Estilização com escopo local
- **ESLint** - Linter para JavaScript

---

## Estrutura Geral dos Projetos React

```
projeto/
├── public/          # Arquivos estáticos
├── src/
│   ├── assets/      # Imagens, fontes, etc
│   ├── components/  # Componentes reutilizáveis
│   ├── routes/      # Componentes de rota (quando aplicável)
│   ├── App.jsx      # Componente principal
│   ├── main.jsx     # Entry point da aplicação
│   └── index.css    # Estilos globais
├── index.html       # HTML base
├── package.json     # Dependências e scripts
└── vite.config.js   # Configuração do Vite
```

---

## Como Usar Este Repositório

1. Clone o repositório
2. Navegue até o projeto desejado
3. Instale as dependências com `npm install`
4. Execute o projeto com `npm run dev` (frontend) ou `npm start` (backend)

---
