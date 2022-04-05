const express = require('express')
const consoleRoute = require('./app/routes/consoleRoute')
var bodyParser = require('body-parser');
const userRoute = require('./app/routes/userRoute')
const gameRoute = require('./app/routes/gameRoute')
const accessoryRoute = require('./app/routes/accessoryRoute')


const serverConfig = require('./app/config/server.config')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chris:erim12team@expressmovies.6s06n.mongodb.net/gaming?retryWrites=true&w=majority', { useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: cannot connect to my db'));
db.once('open', ()=>{
    console.log('connected to the db:)')
})




const PORT = serverConfig.PORT || 5000
const app = express()
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  
  });
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
//Routes
app.get('/api',(req,res) => res.status(200).send({message : 'test server'}))
app.use('/api/console', consoleRoute)
app.use('/api/game', gameRoute)
app.use('/api/user', userRoute)
app.use('/api/accessory', accessoryRoute)













app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`))
