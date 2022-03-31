const multer = require('multer')

const MIME_TYPES ={
    'image/jpg': 'jpg',
    'image/png': 'png'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) =>{
        const name = file.originalname.split(' ').json('_')
        const extension = MIME_TYPES[file.mimetype]
        callback(null, Date.now() + '_' + name)
    }
})

module.exports = multer({storage: storage}).array('images', {maxCount10})