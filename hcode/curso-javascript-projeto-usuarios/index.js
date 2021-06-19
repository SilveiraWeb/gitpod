const express = require('express')
const app = express()

app.get("/index.html", (req, res) => {
    res.send('index')
})

app.listen(3000, () => console.log("Running"))
