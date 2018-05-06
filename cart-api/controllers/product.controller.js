// Accessing the Service that we just created

var ProductService = require('../services/product.service')

// Saving the context of this module inside the _the variable

_this = this

exports.getProducts = async function(req, res, next){

    try{
    
        var products = await ProductService.getProducts()
        
        return res.status(200).json({'status': 200, products, 'message': 'Succesfully Products Recieved'});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.updateProduct = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    try{
        var updatedProduct = await ProductService.updateProduct(req.body)
        return res.status(200).json({status: 200, data: updatedProduct, message: "Succesfully Updated Product"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}