const express = require('express');
const app = express();


// static
app.use(express.static('public'));

app.listen(3000, () => console.log("Running"))
