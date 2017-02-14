/**
 * Created by MelatroN on 21/01/2016.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    _creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    _article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', Comment);