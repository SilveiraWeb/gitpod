// caso apareca os '...' no nome do modulo sera 
// necessario instalar a biblioteca de tipagem "@types/express"
import express from "express";

//@types/express
const app = express();

/**
 * - Methods -
 * GET    => Busca informações
 * POST   => Inserir informações
 * PUT    => Alterar uma informação
 * DELETE => Apagar um dado
 * PATH   => Alterar uma informação especifica
 */
app.get("/test", (req, res) => {
    return res.send("Hello NLW");
});

app.post("/test-post", (req, res) => {
    return res.send("Ola NLW test-post");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
