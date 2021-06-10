// EEnvio de emails com nodemailer 
const express = require('express')
const nodemailer = require('nodemailer')
const ejs = require('ejs')

const app = express()

app.get('/sendemail', async (req, res)=>{
    // transporter mailtrap "https://mailtrap.io/"
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "dfd2145d3de0e1",
          pass: "c322291e5f8287"
        }
      });
    // config do  email
    let message = await transport.sendMail({
        from: '"Pessoa teste" <pessoa@teste.com>',
        to: "teste@teste.com",
        subject: "Email com NodeMailer",
        text: "Este é  um email de teste",
        html: "<p>Este é um email de teste</p>"
    })
    res.send("Enviou")
})

app.get('/sendhtml', (req, res)=>{
    ejs.renderFile(__dirname + "/email.ejs", (err, data)=>{
        if(err){
            console.log("error")
        }else{
            // transporter mailtrap "https://mailtrap.io/"
            var transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                user: "dfd2145d3de0e1",
                pass: "c322291e5f8287"
                }
            });
            let mailOptions = {
                from: '"Pessoa Teste HTML" pessoa@teste.com',
                to:"teste@teste.com",
                subject:"E-mail com HTML",
                html: data
            }
            transport.sendMail(mailOptions, (err, info)=>{
                if(err){
                    console.log("Error")
                }else{
                    console.log("Email enviado")
                }
            })
        }
    })
    res.send("Email enviado")
})
app.listen(3000, ()=> console.log("Running"))