const router = require('express').Router();

// Thought controller import functions
const { 
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought,
    addThoughtReaction,
    deleteThought,
    removeThoughtReaction
} = require('../../controllers/thoughtController');


router.route('/')
      .get(getThoughts).post(createThought);


router.route('/:id')
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThought); 



router.route('/:thoughtId/reactions')
      .post(addThoughtReaction).delete(removeThoughtReaction);



module.exports = router;
