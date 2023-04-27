// imports
const Router = require('express');
const userController = require('../controllers/userController');

// create router
const router = Router();

// routes
router.post('/user-login', userController.user_login);
router.post('/user-logout', userController.user_logout);

// export
module.exports = router;