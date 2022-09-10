const express = require('express');
const exchangeCtrl = require('../controllers/exchange');
const router = express.Router();

router.get('/exchange/:id', exchangeCtrl.getOneExchange);
router.get('/exchange', exchangeCtrl.getAllExchange);

module.exports = router;