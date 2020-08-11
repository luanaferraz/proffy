# 👩‍🏫 Proffy

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/luanaferraz/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/luanaferraz/proffy">

  <a href="https://github.com/tgmarinho/luanaferraz/proffy/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/luanaferraz/proffy">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/luanaferraz/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/luanaferraz/proffy?style=social">
  </a>

</p>

<h4 align="center"> 
	🚧 Em construção... 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

👩‍🏫 Proofy - Plataforma para conectar alunos e professores.


Projeto desenvolvido durante a **NLW - Next Level Week #2** oferecida pela [Rocketseat](https://rocketseat.com.br/).

---

## ⚙️ Funcionalidades

- [x] Professores podem se cadastrar na plataforma web enviando:
  - [x] nome, foto, WhatsApp e biografia
  - [x] matéria que deseja ensinar
  - [x] preço da hora/aula
  - [x] dias e horários disponíveis 

- [x] Os alunos tem acesso aos professores, onde podem:
  - [x] filtrar matéria, dia e horário 
  - [x] favoritar professores (apenas no web) 
  - [x] entrar em contato com o professor através do WhatsApp

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web">
  Layout Web
</a>
<br>
<a href="https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile">
  Layout Mobile
</a>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:luanaferraz/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:luanaferraz/proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/luanaferraz/proffy/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**

> Veja o arquivo  [package.json](https://github.com/luanaferraz/proffy/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/luanaferraz/proffy/blob/master/mobile/package.json)

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 👩‍ Autor
[![Linkedin Badge](https://img.shields.io/badge/-Luana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luana-ferraz-b384b713b/)](https://www.linkedin.com/in/luana-ferraz-b384b713b/) 
[![Gmail Badge](https://img.shields.io/badge/-luanarufino94@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luanarufino94@gmail.com)](mailto:luanarufino94@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Luana Ferraz [Entre em contato!](https://www.linkedin.com/in/luana-ferraz-b384b713b/)

---

