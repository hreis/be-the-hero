const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
   // { producao
   //    origin: 'http://meuapp.com'
   // }
));
app.use(express.json());
app.use(routes);

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



app.listen(3333);