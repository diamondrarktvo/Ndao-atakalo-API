const Exchange = require('../models/Exchange');

/**
 * Create controller
 */
exports.createExchange = (req, res, next) => {
    const exchangeObj = req.body;
    const exchange = new Exchange({
        ...exchangeObj,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    exchange.save()
        .then(() => res.status(201).json({message: "Echange créé avec succès!"}))
        .catch((error) => res.status(400).json({error}));
};

/**
 * Update controller
 */
exports.updateExchange = (req, res, next) => {
    const exchangeObj = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => {
            Exchange.updateOne({_id: req.params.id}, {...exchangeObj, _id: req.params.id})
                    .then(() => res.status(200).json({message: "Echange modifié avec succès!"}))
                    .catch((error) => res.status(404).json({error}));
        })
        .catch((error) => res.status(404).json({error}));
}

/**
 * Get One controller
 */
exports.getOneExchange = (req, res, next) => {
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => res.status(200).json(exchange))
        .catch((error) => res.status(404).json({error}));
};

/**
 * Get list of exchange controller
 */
exports.getAllExchange = (req, res, next) => {
    Exchange.find()
        .then((exchanges) => res.status(200).json(exchanges))
        .catch((error) => res.status(400).json({error}));
};