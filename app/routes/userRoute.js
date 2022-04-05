const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/auth')
const getUser = require('../controllers/user')

//Auth
router.post('/', userCtrl.signUp)
router.post('/', userCtrl.signIn)

//Info user
router.get('/', getUser.getAllUsers)
router.get('/:id', getUser.userInfo)
router.get('/:id', getUser.updateUser)
router.get('/id', getUser.deleteUser)

module.exports = router;