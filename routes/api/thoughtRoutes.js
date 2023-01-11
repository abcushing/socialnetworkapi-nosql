const router = require("express").Router();
const {
  getThoughts,
  findSingleThought,
  createThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/Thought
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:courseId
router
  .route("/:courseId")
  .get(findSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").get(newReaction).delete(deleteReaction);

module.exports = router;
