const Product = require('../models/product');
const ObjectID = require('mongoose').Types.ObjectId;//Verifie en base de donnée


module.exports.readProduct = (req, res) =>{
    Product.find((err, docs) =>{
        if(!err) res.send(docs);
        else console.log('Rien en base de donnée:' + err);
    })
}

module.exports.addProduct = async (req, res) =>{
    console.log(req.body)
    const newProduct = new Product({
        constructor: req.body.constructor,
        type: req.body.type,
        model: req.body.model,
        description: req.body.description,
        price: req.body.price,
        reference: req.body.reference,
    });
    console.log(newProduct)
   /*  try{
        const product = await newProduct.save()
        return res.status(201).json(product)
    }catch(err){
        return res.status(400).send(err)
    } */
    newProduct.save(function(err, product) {
        if (err)return res.status(400).send(err);
        return res.status(201).json(product)
      });
}

