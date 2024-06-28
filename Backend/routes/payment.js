const express = require('express');
const { createPayment } = require('../controllers/paymentController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createPayment);

module.exports = router;
