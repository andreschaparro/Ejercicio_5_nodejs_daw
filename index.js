const express = require("express");
const app = express();
const port = 3000

const datos = require("./datos.json");

app.get("/devices", (req, res) => {
    res.send(datos);
});

app.get("/devices/:id", (req, res) => {
    const datosFiltrados = datos.filter(item => item.id == req.params.id);
    res.send(datosFiltrados);
});

app.listen(port, () => {
    console.log(`API funcionando en el puerto ${port}`)
});