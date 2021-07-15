const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  userId: {
    type: Number,
  },
  wargameId: {
    type: Number,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
