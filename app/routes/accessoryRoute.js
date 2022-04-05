const express = require('express')
const router = express.Router()
const accessoryCtrl = require('../controllers/accessory')

router.get('/', accessoryCtrl.readAccessory)
router.post('/', accessoryCtrl.addAccessory)

module.exports = router;