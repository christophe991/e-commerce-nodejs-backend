const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split('')[1];
        const payload = jwt.decode(token, 'RAMDOM_SECRET_TOKEN');
        if (req.body.userId && req.body.userId !== payload.userId){
            throw 'user ID non valide'
        }
        else{
            next();
        }
    }
    catch(error){
        res.status(401).json({error: 'Requête non authentifiée'});
    }
   

}

