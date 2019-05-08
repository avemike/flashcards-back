const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const { mFlashcard, validateFlashcard } = require('../models/mFlashcard')
const { mFlashcardCategory, validateFlashcardCategory } = require('../models/mFlashcardCategory');

// return all flashcards
router.get('/', async (req, res) => {
    
    const flashcards = await mFlashcard.find().sort('firstText');

    if (!flashcards) return res.status(404).send('Flashcards were not found.');    
    else res.send(flashcards);
    
});

// return flashcard with given id
router.get('/:id', async (req, res) => {
    
    const flashcard = await mFlashcard.findOne({_id: mongoose.Types.ObjectId(req.params.id)}).sort('firstText');
    
    if (!flashcard) return res.status(404).send('The flashcard with the given ID was not found.');
    else res.send(flashcard);
});

// creates flashcard
router.post('/', async (req, res) => {
    const { error } = validateFlashcard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let flashcard = new mFlashcard({
        firstText: req.body.firstText,
        secondText: req.body.secondText,
    });

    flashcard = await flashcard.save();
    
    res.send(flashcard);
});
 
// change flashcard (by given id) properties
router.put('/:id', async (req, res) => {
    const { error } = validateFlashcard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const flashcard = await mFlashcard.findOneAndUpdate({
            _id: mongoose.Types.ObjectId(req.params.id)
        }, {
            firstText: req.body.firstText,
            secondText: req.body.secondText
        }, {
            new: true
        });

    if (!flashcard) return res.status(404).send('The flashcard with given ID was not found.');

    res.send(flashcard);
});

// delete flashcard by given id
router.delete('/:id', async (req, res) => {
    let flashcard = await mFlashcard.findOneAndDelete(
        {
            _id: mongoose.Types.ObjectId(req.params.id)
        }
    );
    
    // for the future 
    // else while(await mFlashcardCategory.findOneAndDelete(
    //     {
    //         flashcardId: mongoose.Types.ObjectId(req.params.id)
    //     }
    // ));

    if (!flashcard) return res.status(404).send('The flashcard with the given ID was not found.');    
    res.send(flashcard);
});


module.exports = router;