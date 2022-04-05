const Console = require('../models/console');



module.exports.readConsole = (req, res) =>{
    Console.find((err, docs) =>{
        if(!err) res.send(docs);
        else console.log('Aucune console en base de donnée:' + err);
    })
}

module.exports.addConsole = async (req, res) =>{
    console.log(req.body)
    const newConsole = new Console({
        brand: req.body.brand,
        type: req.body.type,
        model: req.body.model,
        description: req.body.description,
        price: req.body.price,
        reference: req.body.reference,
    });
    console.log(newConsole)
    try{
        const console = await newConsole.save()
        return res.status(201).json(console)
    }catch(err){
        return res.status(400).send(err)
    }
    /* newProduct.save(function(err, product) {
        if (err)return res.status(400).send(err);
        return res.status(201).json(product)
      }); */
}

