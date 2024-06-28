
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { bookSlot , getUserBookings} = require('../controllers/bookingController'); // Adjust the path as needed

router.post('/', verifyToken, bookSlot);
router.get('/', verifyToken, getUserBookings);

module.exports = router;
