const express = require('express');
const router = express.Router();

// Rotas
router.get('/', (req, res) => {
    res.send("Ola mundo");
});
router.get('/user', (req, res) => {
    res.send("Usuarios");
});
router.post('/user', (req, res) => {
    res.send("Incluir Usuarios");
});
router.put('/user/:id', (req, res) => {
    res.send("Editar dados do Usuarios " + req.params.id);
});
router.delete('/user/:id', (req, res) => {
    res.send("Excluir Usuarios " + req.params.id);
});

module.exports = router;