const express = require('express');
const exchangeCtrl = require('../controllers/exchange');
const multer = require('../middlewares/multer_config');
const router = express.Router();

router.post('/', multer, exchangeCtrl.createExchange);
router.get('/list', exchangeCtrl.getAllExchange);
router.get('/:id', exchangeCtrl.getOneExchange);

module.exports = router;