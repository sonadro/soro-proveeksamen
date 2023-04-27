// imports
const { Router } = require('express');
const produktController = require('../controllers/produktController');

const router = Router();

// routes
router.post('/lag-produkt', produktController.lag_produkt);
router.post('/get-produkter', produktController.get_produkter);
router.post('/get-produktID', produktController.get_produktID);
router.post('/oppdater-produkt', produktController.oppdater_produkt);
router.post('/slett-produkt', produktController.slett_produkt);

module.exports = router;