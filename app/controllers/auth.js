const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')
const {signUpErrors, signInErrors} = require('../services/errors')

const maxAge = 3 * 24 * 60 * 60 * 100

const createToken = (id) =>{
    return jwt.sign({id}, process.env.TOKEN_SECRET,{
        expiresIn: maxAge
    })
}

module.exports.signUp = async (req, res) => {
    const {name, firstname, email,  password, street, number, city, postalcode, country} = req.body
    try{
        const user = await UserModel.create({name, firstname, email,  password, street, number, city, postalcode, country})
        res.status(201).json({user: user._id})
    }catch(err){
        const errors = signUpErrors(err)
        res.status(200).send({errors})
    }
}

module.exports.signIn = async (req, res) =>{
    const {email, password} = req.body
    console.log(req.body)
    try{
        const user = await UserModel.login(email, password)
        const token = createToken(user._id)
        res.cookies('jwt', token, {httpOnly: true, maxAge})
        res.status(200).json({user: user._id})
    }catch(err){
        const errors = signInErrors(err)
        res.status(200).json({errors})
    }
}

module.exports.logout = (req, res) =>{
    res.cookies('jwt', '', {maxAge: 1})
    res.redirect('/')
}