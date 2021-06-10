const express = require('express');
const {body,validationResult} = require('express-validator');
const bodyParser =  require('body-parser');

const app = express();

app.use(bodyParser.json({extended:false}));

app.get('/user', (req, res) => {
    res.send("User");
})

/**
 * Alert
 * Finalizar este estudo
 */
// validacao de dados
app.post('/user', ([
    body("username").isEmail(),
    body("password").isLength({min:6})
]), (req, res) => {
    // 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 
    return res.status(200).json({msg: "sucesso"});
    
});
app.post('/validation-withmessage', [
    body("username").isEmail().withMessage('Email invalido'),
    body("password").isLength({min:6}).withMessage('Senha invalida')
], (req, res) => {
    // 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 
    return res.status(200).json({msg: "sucesso"});
    
});

app.listen(3000, () => console.log("Running..."));