const mongoose =require('mongoose')

const PostShema =  mongoose.Schema(
    {
        constructor: {
            type: String,
        },
        type: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        reference: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model('Product', PostShema);

