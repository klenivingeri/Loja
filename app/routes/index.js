const routes = require('express').Router();

const ProductsController = require('../controllers')

routes.get('/api/products', ProductsController.products)


module.exports = routes;

