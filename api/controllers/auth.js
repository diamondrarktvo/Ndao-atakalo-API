const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.listUsers = (req, res, next) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json({error}))
};

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

exports.signin = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if(!user){
                return res.status(401).json({message: "Adresse email incorrecte!"})
            }else{
                bcrypt.compare(req.body.password, user.password)
                    .then((validePassword) => {
                        if(!validePassword){
                            return res.status(401).json({message: "Mot de passe incorrecte!"})
                        }
                        res.status(200).json({
                            userId: user._id,
                            email: user.email,
                            token: jwt.sign(
                                {userId: user._id},
                                "ANDAO_ATAKALO_E",
                                {expiresIn: "24h"},
                            )
                        });
                        
                    })
                    .catch((error) => res.status(500).json(error));
            }
        })
        .catch((error) => res.status(404).json(error));
}