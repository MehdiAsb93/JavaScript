const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Bienvenue sur mon serveur! MEHDI');
});

app.listen(port, () => {
console.log(`L'application est en écoute sur le port ${port}`);
});