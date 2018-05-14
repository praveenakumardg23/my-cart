// Gettign the Newly created Mongoose Model we just created 
var Product = require('../models/product.model');

// Saving the context of this module inside the _the variable
_this = this

exports.getProducts = async function(){
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var products = await Product.find();
        return products;
    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while gettinng Products')
    }
}

exports.updateProduct = async function(product){
    var id = product._id

    try{
        var product = await Product.findOneAndUpdate({ _id: id }, product, { new:true });
        return product;
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }
}
