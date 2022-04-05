const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game')

router.get('/', gameCtrl.readGames)
router.post('/', gameCtrl.addGame)

module.exports = router;