const mongoose = require('mongoose');

/**
 * Exchange model
 */
const exchangeSchema = mongoose.Schema({
    userId: {type: String, required: true},
    user : {type: String, required: true},
    contact: {type: String, required: true},
    exchangeTo: {type: String, required: true},
    imageUrl: {type: String, required: true},
    status: {type: Number, required: true}
});

module.exports = mongoose.model('Exchange', exchangeSchema);