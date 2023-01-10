const { userSchema } = require("../models/User");

module.exports = {
  // Get all users
  getUsers(req, res) {
    console.log("getusers");
    userSchema
      .find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    userSchema
      .findOne({ _id: req.params._id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID exists" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    userSchema
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    userSchema
      .findOneAndDelete({ _id: req.params._id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : userSchema.deleteOne()
      )
      .then(() => res.json({ message: "user deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    userSchema
      .findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
