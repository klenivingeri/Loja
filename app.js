const express = require('express');
const cors = require('cors')

class AppController{
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use(express.json());
        this.express.use(cors())
    }
    routes() {

        this.express.use(require('./app/routes'))
    }
}

module.exports = new  AppController().express