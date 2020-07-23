
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hreis/be-the-hero?color=%23EE4D64&style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hreis/be-the-hero?color=%23EE4D64&style=flat-square">
  
  <a href="https://github.com/hreis/be-the-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hreis/be-the-hero?color=%23EE4D64&style=flat-square">
  </a>

  <a href="https://github.com/hreis/be-the-hero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/hreis/be-the-hero?color=%23EE4D64&style=flat-square">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%23EE4D64&style=flat-square">
</p>

<p align="center">
  App to help NGOs built with ReactJS, React Native, Node.js and more. 
</p>

<img src="https://github.com/hreis/be-the-hero/blob/master/thumbnail.png" />

## About this Project

#### Web

The web page will be used to register the NGO, where you will receive an ID for access. Subsequently, cases will be registered on the profile page.

#### App

In the application will be listed all the cases registered by the NGOs, where you will have WhatsApp and E-mail so that the user can contribute with the case by contacting the responsible person directly.

## Why?

BeTheHero is a project that aims to connect people who want to make monetary
contributions to NGOs (non-governmental organizations) that need help.

## Tech

- [NodeJs](https://nodejs.org/en/) - Build the server
- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces
  - [React Icons](https://react-icons.github.io/react-icons/) - Utilizes ES6 imports that allows you to include only the icons that your project is using.
  - [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings
- [React Native](https://reactnative.dev) - Native Development
  - [React Navigation](https://reactnavigation.org/docs/getting-started/) - Routing and navigation for your React Native apps.
- [Expo](https://expo.io) - Deploy and quickly iterate on native Android, iOS, and web apps
  - [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - Compose and send mail 
- [SQLite3](https://www.sqlite.org) - DB Connector
- [Express](https://expressjs.com/) - Router of the Application
- [KnexJs](http://knexjs.org) - SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift
- [Celebrate](https://github.com/arb/celebrate) - A joi validation middleware for Express.
- [CORS](https://www.npmjs.com/package/cors) - Cross-origin Resource Sharing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs
- [Jest](https://jestjs.io) - Jest is a JavaScript testing framework maintained by Facebook
- [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers
- [Nodemon](https://nodemon.io/) - Process Manager used in the development
- [Intl](https://www.npmjs.com/package/intl) - Internationalization and localization facilities, including message translation, plurals and genders, date/number.
- [Prettier](https://prettier.io/docs/en/cli.html) - An opinionated code formatter
- [ESlint](https://eslint.org) - ESLint statically analyzes your code to quickly find problems.

## Development setup

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with Yarn, NodeJs and Expo CLI installed.

#### Cloning the Repository

```git
git clone https://github.com/hreis/be-the-hero.git
```

### Installing

#### Back-End

In the backend folder;

```
yarn
```

To start the server;

```
yarn start
```

Open Insomnia or Postman and import the Insomnia.json workspace file at backend folder.

#### Front-End

In the frontend folder;

```
yarn
```

To start the project;

```
yarn start
```

#### Mobile

In the mobile folder;

```
yarn
```

Update the baseURL at src/services/api.js;

To start the app;

```
expo start
```

*or*

```
yarn start
```

#### Test

At the backend folder;

```
yarn test
```

#### Migrations

Update the database;

```
knex migrate:latest
```

To rollback all the completed migrations;

```
yarn migrate:rollback
```

To run the next migration that has not yet been run;

```
knex migrate:up
```

To undo the last migration that was run;

```
knex migrate:down
```

## Contribution

See the [contribution guide](/.github/CONTRIBUTING.md) for more details on how to contribute to this project.

# License

[MIT License](/LICENSE)
