// caso apareca os '...' no nome do modulo sera 
// necessario instalar a biblioteca de tipagem "@types/express"
import express from "express";
import "reflect-metadata";
import "./database"; //  sqlite connection

//@types/express
const app = express();

app.get("/test", (req, res) => {
    return res.send("Hello NLW");
});

app.post("/test-post", (req, res) => {
    return res.send("Ola NLW test-post");
});

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
 * Query Params   => http://localhost:3000/products?name=teclado&descriiption=tecladobom&price=low
 * Body Params    =>  {
 *  "name": "teclado,
 * "description": "tecladobom",
 * "price": "low"
 * " * }
 */