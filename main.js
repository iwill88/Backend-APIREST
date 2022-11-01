const express = require("express");
const { Router } = require("express");

const app = express();

const PORT = 8080;
const path = require('path');
const logRequestInfo = require("./middlewares/logRequestInfo");
const router = require("./productos");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/api/productos', logRequestInfo, router);


app.get('/api', logRequestInfo,  (req,res)=> {
    res.sendFile(path.resolve('public/index.html'));
})

const server = app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
})

server.on("error", (error) => console.log(error.message));


module.exports = app;