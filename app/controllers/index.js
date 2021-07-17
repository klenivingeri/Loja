const axios = require('axios')

class ProductsController{
    async products(req, res){
        
        try {

            const  { data } = await axios('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')

            if(data.erro){
                return res.status(401).json(data)
            }

            return res.status(200).json(data)

        } catch (error) {

            return res.status(404).json({message: 'Failed to return Api data' })

        }
        
    }
}

module.exports = new ProductsController();
