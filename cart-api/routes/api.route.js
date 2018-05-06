var express = require('express')

var router = express.Router()
var product = require('./api/product.api')


router.use('/products', product);


module.exports = router;
