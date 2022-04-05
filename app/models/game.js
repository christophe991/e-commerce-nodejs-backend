const mongoose = require('mongoose')

const GameShema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        exclusivity: {
            type: Boolean,
        },
        date: {
            type: Date,
        },
        gender: {
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

module.exports = mongoose.model('Game', GameShema);