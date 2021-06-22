// caso apareca os '...' no nome do modulo sera
// necessario instalar a biblioteca de tipagem "@types/express"
import "reflect-metadata";
import express from "express";
import "./database"; // import connection
import {router} from  "./routes";

const app = express();
app.use(express.json())
app.use(router);

app.listen(3000, () => {
  console.log("Server is running...");
});

/**
 * - Methods -
 * GET    => Busca informações
 * POST   => Inserir informações
 * PUT    => Alterar uma informação
 * DELETE => Apagar um dado
 * PATH   => Alterar uma informação especifica
 */
/**
 * Tipos  de paramêtros
 * Routes Params  => http://localhost:3000/products/78845548874555
 * Query Params   => http://localhost:3000/products?name=teclado&description=tecladobom&price=low
 * Body Params    =>  {
 *  "name": "teclado,
 * "description": "tecladobom",
 * "price": "low"
 * " * }
 */
/**
 * criando migrations
 * yarn typeorm migration:create -n CreateUsers
 * yarn typeorm migration:run cria migrtaion table e todas as tabelas
 * yarn typeorm migration:revert apaga tabela
 * yarn typeorm entity:create -n User cria arquivo de entidade
 * equivalente a Model
 */
