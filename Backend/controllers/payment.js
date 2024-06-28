const express = require('express');
const { createPayment } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createPayment);

module.exports = router;
