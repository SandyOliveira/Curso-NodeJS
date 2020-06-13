const express = require('express');

const routes = express.Router();


const ProductController = require('./controllers/ProductController')
//criando rota 
//req=requisicao res=resposta da requisicao
routes.get("/products", ProductController.index);
routes.get("/products/:id",ProductController.show);
routes.post("/products",ProductController.store);
routes.put("/products/:id",ProductController.update)
routes.delete("/products/:id",ProductController.destroy);

module.exports = routes;