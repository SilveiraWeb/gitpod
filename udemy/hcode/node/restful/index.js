const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// chamando rotas com consign
consign().include("routes").include("utils").into(app);
//const routerIndex = require('./routes/index');
//const routerUsers = require('./routes/users');
//app.use(routerIndex);
//app.use("/users", routerUsers);

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});