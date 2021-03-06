const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const mFlashcardCategory = mongoose.model('Flashcard-category relation', new mongoose.Schema({
    flashcardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flashcard',
        require: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {collection: 'flashcardsCategories'}));

function validate(relation) {
    const schema = {
        flashcardId: Joi.objectId(),
        categoryId: Joi.objectId()
    };

    return Joi.validate(relation, schema);
}

exports.mFlashcardCategory = mFlashcardCategory;
exports.validateFlashcardCategory= validate;