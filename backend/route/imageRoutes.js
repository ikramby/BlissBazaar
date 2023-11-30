// imageRoutes.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Endpoint to get an image by filename
router.get('/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the file and send it in the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    // If the file doesn't exist, send a 404 response
    res.status(404).send('File not found');
  }
});

module.exports = router;
