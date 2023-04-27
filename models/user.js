// packages
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    brukernavn: {
        type: String,
        required: true,
        unique: true
    },
    brukertype: {
        type: String,
        required: true
    },
    passord: {
        type: String,
        required: true
    }
});

const user = mongoose.model('user', userSchema);

module.exports = { userSchema, user };