const mongoose = require('mongoose');

const exchangeSchema = mongoose.Schema({
    userId: {type: Number, required: true},
    user : {type: String, required: true},
    contact: {type: String, required: true},
    exchangeTo: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

module.exports = mongoose.model('Exchange', exchangeSchema);