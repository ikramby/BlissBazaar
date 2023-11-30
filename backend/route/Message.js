const express = require('express');
const router = express.Router();
const messageController = require('../controlers/Message');

router.post('/',  messageController.createMessage);


module.exports = router;
