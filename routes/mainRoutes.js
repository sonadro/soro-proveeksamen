// imports
const { Router } = require('express');
const mainController = require('../controllers/mainController');

// create router
const router = Router();

// middleware
const { adminAuth, loggedInCheck } = require('../middleware/authentication');

// routes
router.get('/', loggedInCheck, mainController.home_get);
router.get('/login', loggedInCheck, mainController.login_get);
router.get('/admin', loggedInCheck, adminAuth, mainController.admin_get);
router.get('/produkter', loggedInCheck, mainController.produkter_get);
router.get('/logout', mainController.logout_get);
router.get('/veileder', loggedInCheck, adminAuth, mainController.veileder_get);

module.exports = router;