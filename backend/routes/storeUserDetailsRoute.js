const express = require('express')
const router = express.Router()
const storeUserDetailsController = require('../controllers/storeUserDetailsController')

router.route('/').post(storeUserDetailsController.storeUserDetails)

module.exports = router