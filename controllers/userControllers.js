const { User, Thought } = require("../models");

module.exports = {
  // Get all users
  getUsers(req, res) {
    console.log("getusers");
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    console.log("req params= ", req.params);
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID exists" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    console.log(req.body);
    User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    console.log(req.params);
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        console.log("user", user);
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : userSchema.deleteOne();
      })
      .then(() => res.json({ message: "user deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    console.log("update params ", req.params);
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
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

  addFriend(req, res) {
    console.log("words n hre", req.params, req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: {
          friends: req.body,
        },
      },

      { runValidators: true, new: true }
    )
      .then((user) => {
        console.log("users ad frend", user);
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $pull: {
          friends: req.params.friendId,
        },
      }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User removed!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
