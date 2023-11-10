const express = require('express');
const app = express();
const port = 3000;

const obj = {
    id: "1",
    titre: "Fourchette",
    contenu: "Fourchette",
};

const jsonString = JSON.stringify(obj)

app.get('/articles', (req, res) => {
    res.send(jsonString);
});

app.listen(port, () => {
    console.log(`L'application est en écoute sur le port ${port}`);
});