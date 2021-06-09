const express = require('express')

const port = 8080

const app = express()

app.get('/', (req, res) => {
    res.send(Ola mundo)
})

app.listen(port, ()=>{
    console.log("Running on "+ port)
})

/**
 * cmd build app com docker
 * docker build -t nodejsdocker/node-web-app .
 * apos build
 * docker run -p 49160:8080 -d nodejsdocker/node-web-app
 * 
 * docker-machine ip
 */