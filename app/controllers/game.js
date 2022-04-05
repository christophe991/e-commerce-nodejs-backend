const Game = require('../models/game')
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readGames = (req, res) =>{
    Game.find((err, docs) =>{
        if(!err) res.send(docs)
        else console.log('Rien en base de donnée:' + err)
    })
}

module.exports.addGame = async (req, res) =>{
    const newGame = new Game({
        title: req.body.title,
        exclusivity: req.body.exclusivity,
        date: req.body.date,
        gender: req.body.gender,
        price: req.body.price,
        reference: req.body.reference
    })
    console.log(newGame)
    try{
        const game = await newGame.save()
        return res.status(201).json(game)
    }catch(err){
        return res.status(400).send(err)
    }
}