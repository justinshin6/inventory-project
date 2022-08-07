const express = require('express')
const router = express.Router()

// bring in functions from the userController
const {registerUser, loginUser} = require('../controller/userController')

router.post('/', registerUser)

router.post('/login', loginUser)
module.exports = router