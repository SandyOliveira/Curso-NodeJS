const express = require('express')
const mongoose = require("mongoose");
const cors =require('cors');

//para usar mais de uma require
const requireDir = require("require-dir");
//incluindo o app-iniciando
const app = express();
app.use(express.json());
//permite acesso a outros dominios
app.use(cors());


//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{
    useNewUrlParser: true, 
    useUnifiedTopology: true });
  
requireDir("./src/models");



//rotas
app.use('/api',require('./src/routes'));
app.listen(3001);