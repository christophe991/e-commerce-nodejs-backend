const mongoose = require('mongoose')
const {isMail} = require('validator')
const bcrypt = require('bcrypt')

const UserShema = mongoose.Schema(
    {
        name:{
            type: String
        },
        firstname:{
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        street: {
            type: String
        },
        number: {
            type: String
        },
        city: {
            type: String
        },
        postalcode: {
            type: String
        },
        country: {
            type: String
        }
    }
)

UserShema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
UserShema.static.login = async function (email, password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error('Email ou mot de passe incorrect')
    }
    throw Error('Email ou mot de passe incorrect')
}
const UserModel = mongoose.model('user', UserShema);
module.exports = UserModel