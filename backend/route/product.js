const express = require('express');
const router = express.Router();
const productController = require('../controlers/product');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_Name, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});
router.post('/', async (req, res) => {
    try {
      const { name, description, price, category, status, color, manufacturer, onSale, quantity } = req.body;
      let imageUrl;
  
      if (req.body.imageUrl) {
        imageUrl = req.body.imageUrl;
      } else if (req.files && req.files.image) {
        const file = req.files.image;
  
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          public_id: `${Date.now()}`,
          resource_type: 'auto',
        });
  
        imageUrl = result.secure_url;
      }
  
      res.status(201).json({ message: 'Product created successfully', imageUrl });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.put('/:id', async (req, res) => {
  try {
    const fileContent = req.body.image; // Assuming the image is sent in the request body as base64 encoded data
    const result = await cloudinary.uploader.upload(fileContent, { resource_type: 'image' });
    req.body.image = result.url; // Update the request body with the Cloudinary URL
    productController.updateProduct(req, res);
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).send('Error uploading image');
  }
});

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.get('/search/:input', productController.searchProducts);
router.delete('/:id', productController.deleteProduct);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/color/:color', productController.getProductsByColor);
router.get('/manufacturer/:manufacturer', productController.getProductsByManufacturer);
router.get('/price/:price', productController.getProductsByPrice);

module.exports = router;
