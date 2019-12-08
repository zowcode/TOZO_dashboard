const express = require('express');

const hostname = 'localhost';
const port = 3001;

const app = express();

app.listen(port, hostname, () => {
    console.log(`Mon serveur fonctionne sur http://${hostname}:${port} \n`);
})
