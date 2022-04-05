const Accessory = require('../models/accessory')


module.exports.readAccessory = (req, res) =>{
    Accessory.find((err, docs) =>{
        if(!err) res.send(docs)
        else console.log('Aucun accessoire en base de donnée')
    })
}

module.exports.addAccessory = async(req, res) =>{
    console.log(req.body)
    const newAccessory = new Accessory({
        name: req.body.name,
        compatibility: req.body.compatibility,
        price: req.body.price,
        reference: req.body.reference
    })
    console.log(newAccessory)
    try{
        const accessory = await newAccessory.save()
        return res.status(201).json(accessory)
    }catch(err){
        return res.status(400).send(err)
    }
}