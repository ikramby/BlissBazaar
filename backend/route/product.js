const express = require('express');
const router = express.Router();
const productController = require('../controlers/product');
const multer = require('multer');
const {storage}= require('../index')

const upload = multer({ dest: 'uploads' });
router.post('/', upload.single('image'), productController.createProduct);
router.put('/:id', upload.single('image'), productController.updateProduct);

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
//router.post('/', productController.createProduct);
//router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/color/:color', productController.getProductsByColor);
router.get('/manufacturer/:manufacturer', productController.getProductsByManufacturer);
router.get('/price/:price', productController.getProductsByPrice);

module.exports = router;
