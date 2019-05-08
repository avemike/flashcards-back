const Joi = require('joi');
const mongoose = require('mongoose');

const mCategory = mongoose.model('Category', mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}));

function validate(category) {
    const schema = {
        name: Joi.string().min(1).max(255).required()
    };

    return Joi.validate(category, schema);
}

exports.mCategory= mCategory;
exports.validateCategory = validate;