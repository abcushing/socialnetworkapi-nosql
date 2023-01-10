const { Schema, model } = require("mongoose");
const dateFormat = require('./utils/dateFormat')

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
      get: timestamp => dateFormat(timestamp)},
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
        get: timestamp => dateFormat(timestamp)},
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

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
