const ConsoleModel = require('../models/console')
const fs = require('fs')
const { promisify } = require("util")
const pipeline = promisify(require('stream').pipeline)
const { uploadErrors} = require('../services/errors')

module.exports.uploadConsole = async (req, res) =>{
    try{
        if(
            req.file.detecteMimeType != "image/jpg" &&
            req.file.detecteMimeType != "image/png"
        )
        throw Error("Image non validé")
        if(req.file.size > 500000) throw Error("max size")
    }catch (err){
        const errors = uploadErrors(err);
        return res.status(201).json({ errors})
    }
    const fileName = req.body.name + ".jpg"

    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../front_end/src/app/img/${fileName}`
        )
    )
    try{
        await ConsoleModel.findByIdAndUpdate(
            req.body.consoleId,
            { $set: { picture: "./app/img/" + fileName}},
            { new: true, upsert: true, setDefaultsOnInsert: true}
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send({ message: err}))
        )
    }catch(err){
        return res.status(500).send({ message: err})
    }
}