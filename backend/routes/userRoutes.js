const express = require('express')
const router = express.Router()

// bring in functions from the userController
const {registerUser, loginUser, getMe} = require('../controller/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router