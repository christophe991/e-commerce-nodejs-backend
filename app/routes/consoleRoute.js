const express = require('express')
const router = express.Router()
const consoleCtrl = require('../controllers/console')


router.get('/', consoleCtrl.readConsole)
router.post('/', consoleCtrl.addConsole)
/* router.put('/:id', productCtrl.updateProduct)
router.delete('/:id', productCtrl.deleteProduct) */


module.exports = router;







