const multer = require('multer');

const MYME_TYPES = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/jpg": "jpg",
    "application/octet-stream": "jpg"
};

const storageFile = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
        const nameToLower = file.originalname.toLocaleLowerCase();
        const nameWithoutExtOrigin = nameToLower.split(".")[0];
        const name = nameWithoutExtOrigin.split(" ").join("_");
        const ext = MYME_TYPES[file.mimetype];
        callback(null, name + "_" + Date.now() + "." + ext);
    }
});

module.exports = multer({storage: storageFile}).single('imageUrl');