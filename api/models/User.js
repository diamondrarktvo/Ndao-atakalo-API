const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * User model
 */
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
