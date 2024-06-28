const express = require('express');
const { getAllProviders, searchProviders, getProviderById } = require('../controllers/gasProviderController');  
const router = express.Router(); 

router.get('/', getAllProviders);
router.get('/search', searchProviders);
// Route to fetch provider by ID
router.get('/:providerId', getProviderById);

module.exports = router;
