const Exchange = require('../models/Exchange');

exports.getAllExchange = (req, res, next) => {
    Exchange.find()
        .then((exchanges) => res.status(200).json(exchanges))
        .catch((error) => res.status(400).json({error}));
}

exports.getOneExchange = (req, res, next) => {
    Exchange.findOne({_id: req.params.id})
        .then((exchange) => res.status(200).json(exchange))
        .catch((error) => res.status(404).json({error}));
}