// modulos
const express = require('express')
const routes = require("./routes/admin");
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
//const mongoose = require('mongoose')

// config
    //body-parser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    // handlebars
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')
    // mongoose

    // public
    app.use(express.static(path.join(__dirname, 'public')))

// rotas
app.use(routes);

// outros
app.listen(8081, () => console.log("BlogApp is running"))