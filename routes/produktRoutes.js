// imports
const { Router } = require('express');
const produktController = require('../controllers/produktController');

const router = Router();

// routes
router.post('/lag-produkt', produktController.lag_produkt);
router.post('/get-produkter', produktController.get_produkter);

module.exports = router;