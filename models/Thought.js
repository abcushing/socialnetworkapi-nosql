const { Schema, model } = require("mongoose");

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: ObjectId(),
    },
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
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query,
    },

    reactions: {
      reactionID: {
        type: Schema.Types.ObjectId,
        default: ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query,
      },
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
