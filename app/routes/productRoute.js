const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/product')


router.get('/', productCtrl.readProduct)
router.post('/', productCtrl.addProduct)
/* router.put('/:id', productCtrl.updateProduct)
router.delete('/:id', productCtrl.deleteProduct) */


module.exports = router;







