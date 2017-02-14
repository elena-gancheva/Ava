const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    uuid: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: false
    }
});

let options = ({missingPasswordError: "Wrong password"});

User.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', User);