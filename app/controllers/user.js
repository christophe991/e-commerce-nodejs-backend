const UserModel = require('../models/user')
const ObjectID = require("mongoose").Types.ObjectId

module.exports.getAllUsers = async (req, res) =>{
    const users = await UserModel.find().select("-password")
    res.status(200).json(users)
}

module.exports.userInfo = (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknowm :" + req.params.id)

    UserModel.findById(req.params.id, (err, docs) =>{
        if(!err) res.send(docs)
        else console.log("ID unknowm :" + err)
    }).select("-password")
}

module.exports.updateUser = async (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknowm :" + req.params.id)

    try{
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {$ser:{
                bio: req.body.bio
                }
            },
            {new: true, upsert: true, setDefaultsOnInsert: true})
            .then((data) => res.send(data))
            .catch((err) => res.satatus(500).send({message : err}))

    }catch(err){
        return res.status(500).json({message: err})
    }
}

module.exports.deleteUser = async (req, res) =>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknowm :" + req.params.id)

    try{
        await UserModel.remove({_id: req.params.id}).exec()
        res.status(200).json({message: "Supprime avec succés"})
    }catch(err){
        return res.status(500).json({message: err})
    }
}

