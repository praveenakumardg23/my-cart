var express = require('express');
var controller = require('../../controllers/product.controller');
var router = express.Router();

// Map each API to the Controller FUnctions

router.get('/', controller.getProducts);

router.put('/', controller.updateProduct);

module.exports = router;
