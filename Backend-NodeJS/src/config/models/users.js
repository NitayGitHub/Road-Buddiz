const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    },
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: false
    },
    phone: {
        type: String, 
        required: true
    },

});

module.exports = mongoose.model('User', userSchema);