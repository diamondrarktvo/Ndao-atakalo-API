const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashPassword) => {
            const newUser = new User({
                email: req.body.email,
                password: hashPassword
            })
            newUser.save()
                .then(() => res.status(201).json({message: "Utilisateur créer avec succès!"}))
                .catch((error) => res.status(400).json({error}));
        })
        .catch((error) => res.status(400).json({error}));
}