var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    price: Number,
    isInCart: Boolean
}, {collection: 'Product'})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
