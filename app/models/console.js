const mongoose =require('mongoose')

const PostShema =  mongoose.Schema(
    {
        brand: {
            type: String,
        },
        type: {
            type: String,
            
        },
        model: {
            type: String,
           
        },
        description: {
            type: String,
            
        },
        price: {
            type: Number,
            
        },
        reference: {
            type: String,
            
        },
        picture: {
            type: String,
            
        }
    }
)
module.exports = mongoose.model('Console', PostShema);

