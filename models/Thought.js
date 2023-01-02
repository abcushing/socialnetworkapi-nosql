const { Schema, model } = require("mongoose");

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      // Date
      // Set default value to the current timestamp
      // Use a getter method to format the timestamp on query,
    },

    reactions: {
      // Array of nested documents created with the reactionSchema
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("friendCount").get(() => {
  return this.friends.length;
});

const Thought = model("thoughtSchema", thoughtSchema);

module.exports = Thought;
