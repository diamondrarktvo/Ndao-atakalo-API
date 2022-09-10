const express = require('express');
const exchangeCtrl = require('../controllers/exchange');
const router = express.Router();

router.post('/', exchangeCtrl.createExchange);
router.get('/:id', exchangeCtrl.getOneExchange);
router.get('/list', exchangeCtrl.getAllExchange);

module.exports = router;