const express = require('express')
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
//Routes
app.get('/api',(req,res) => res.status(200).send({message : 'test server'}))
app.get('/api/product',(req,res) => res.status(200).send({
    
}))









app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`))