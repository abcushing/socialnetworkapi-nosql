const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/Thought
router.route("/").get(getThought).post(createThought);

// /api/thought/:courseId
router
  .route("/:courseId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
