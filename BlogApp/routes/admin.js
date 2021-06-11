const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    req.render("admin/index")
})
router.get('/posts', (req, res) => {
    req.send("Pagina de posts")
})
router.get('/categorias', (req, res) => {
    req.send("Pagina de categorias")
})
router.get('/teste', (req, res) => {
    req.send("Isso é um teste")
})

module.exports = router;