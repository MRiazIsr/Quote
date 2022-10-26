const express = require('express');
const router = express.Router();
const coinCapController = require('../Controllers/CoinCapController.js');

router.get('/latest/quotes/get', coinCapController.getSymbolQuote);

module.exports = router;