const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors(
   { origin: "*" }
));
app.use(express.json());
app.use(bodyParser.json());
app.use(routes);
app.use(errors());

/**
 * npm start
 * 
 *  Rotas / Recurso (/users : route)
 *  Métodos Http:
 *      GET: Buscar uma informação do backend
 *      POST: Criar uma informação no backend
 *      PUT: Alterar uma informação do backend
 *      DELETE: Delete informação do backend
 */

/**
 * Tipos de Parâmetros:
 * 
 *     Query Params: Parametros nomeados enviados na rota apos o " ? " (filtros, paginacao - request.query)
 *     Route Params: Parametros utilizados para identificar recursos (" /:id" , request.params)
 *     Request Body: Corpo da requisicao, utilizada para criar ou alterar recursos / request.body
 */

/**
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc (bancos nao relacionais)
 */

/**
 * Driver: SELECT * FROM users
 * QueryBuilder: table(users).select(*).where()
 */



module.exports = app;