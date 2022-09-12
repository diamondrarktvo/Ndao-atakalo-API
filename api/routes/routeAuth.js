const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authCtrl = require('../controllers/auth');

router.post('/signup', authCtrl.signup);
router.post('/signin', authCtrl.signin);
router.get('/allUsers', authCtrl.listUsers);

module.exports = router;