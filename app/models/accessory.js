const mongoose = require('mongoose')

const AccessoryShema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        compatibility: {
            type: String,
        },
        price: {
            type: Number,
        },
        reference: {
            type: String
        }
    }
)
module.exports = mongoose.model('Accessory', AccessoryShema)