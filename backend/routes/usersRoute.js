const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/').post(usersController.storeUserDetails);
router.route('/').get(usersController.getUsers); 

module.exports = router;
