const express = require('express');
const app = express();

// rotas
let userRoutes = require('./userRoutes');
app.use('/',userRoutes);

app.listen(3000, () => console.log("Running..."))