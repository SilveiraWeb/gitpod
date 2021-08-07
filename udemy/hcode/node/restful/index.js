const express = require('express');
const consign = require('consign');

const app = express();

consign().include('routes').into(app)
//const routerIndex = require('./routes/index');
//const routerUsers = require('./routes/users');
//app.use(routerIndex);
//app.use("/users", routerUsers);

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});