const express = require('express');
const exchangeCtrl = require('../controllers/exchange');
const multer = require('../middlewares/multer_config');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, multer, exchangeCtrl.createExchange);
router.post('/changeStatus/:id', auth, exchangeCtrl.changeStatusExchange);
router.patch('/:id', auth,  multer, exchangeCtrl.updateExchange);
router.delete('/:id', auth, exchangeCtrl.deleteOneExchange);
router.get('/list', exchangeCtrl.getAllExchange);
router.get('/:id', exchangeCtrl.getOneExchange);

module.exports = router;