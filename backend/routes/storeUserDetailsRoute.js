const express = require('express');
const router = express.Router();
const storeUserDetailsController = require('../controllers/storeUserDetailsController');

router.route('/').post(storeUserDetailsController.storeUserDetails);
router.route('/users').get(storeUserDetailsController.getUsers); 

module.exports = router;
