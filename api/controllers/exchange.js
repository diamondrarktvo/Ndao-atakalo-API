const Exchange = require('../models/Exchange');
const fs = require('fs');

/**
 * Create controller
 */
exports.createExchange = (req, res, next) => {
    const exchangeObj = req.body;
    delete exchangeObj.userId;
    const exchange = new Exchange({
        ...exchangeObj,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        status: exchangeObj.status === 'active' ? 1 : 0
    })
    exchange.save()
        .then(() => res.status(201).json({message: "Echange créé avec succès!"}))
        .catch(() => res.status(400).json({error: "Il y a une erreur survenue à la création de cet échange!"}));
};

/**
 * Change status exchange
 */
exports.changeStatusExchange = (req, res, next) => {
    Exchange.findOne({_id: req.params.id})
            .then((exchange) => {
                if(parseInt(req.params.id) !== parseInt(exchange._id)){
                    res.status(401).json({message: "Non authorizer à modifier cet echange!"})
                }else {
                    Exchange.updateOne({_id: req.params.id}, { status: req.body.status === "active" ? 1 : 0, _id: req.params.id})
                        .then(() => res.status(200).json({message: `Status modifier avec succès!`}))
                        .catch(() => res.status(400).json({error: "Erreur à la mise à jour de cet échange"}));
                }
            })
            .catch(() => res.status(404).json({error: "Impossible de trouver cet échange!"}))
}

/**
 * Update controller
 */
exports.updateExchange = (req, res, next) => {
    const exchangeObj = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        status: req.status === 'active' ? 1 : 0
    } : {
        ...req.body, 
        status: req.status === 'active' ? 1 : 0
    };
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => {
            Exchange.updateOne({_id: req.params.id}, {...exchangeObj, _id: req.params.id})
                    .then(() => res.status(200).json({message: "Echange modifié avec succès!"}))
                    .catch(() => res.status(404).json({error: "Erreur à la mise à jour de cet échange!"}));
        })
        .catch(() => res.status(404).json({error: "Impossible de trouver cet échange!"}));
}

/**
 * Delete one exchange
 */

exports.deleteOneExchange = (req, res, next) => {
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => {
            const fichierName = exchange.imageUrl.split('/images/')[1];
            fs.unlink(`public/images/${fichierName}`, () => {
                Exchange.deleteOne({_id: req.params.id})
                    .then(() => res.status(200).json({message: "Echange supprimer avec succès!"}))
                    .catch(() => res.status(500).json({error: "Erreur survenue au serveur"}));
                })
        })
        .catch(() => res.status(404).json({error: "Impossible de trouver cet échange!"}));
}

/**
 * Get One controller
 */
exports.getOneExchange = (req, res, next) => {
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => res.status(200).json(exchange))
        .catch(() => res.status(404).json({error: "Impossible de trouver cet échange!"}));
};

/**
 * Get list of exchange controller
 */
exports.getAllExchange = (req, res, next) => {
    Exchange.find()
        .then((exchanges) => res.status(200).json(exchanges))
        .catch(() => res.status(400).json({error: "Impossible d'obtenir la liste!"}));
};