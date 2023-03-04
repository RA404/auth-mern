const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
});

module.exports = model('User', UserSchema);

