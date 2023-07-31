const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hatInfo: {
    type: String,
    required: true,
  },
  hatCost: {
    type: Number,
    required: true,
  },
  hatLocation: {
    type: String,
    required: true,
  },
  topInfo: {
    type: String,
    required: true,
  },
  topCost: {
    type: Number,
    required: true,
  },
  topLocation: {
    type: String,
    required: true,
  },
  bottomInfo: {
    type: String,
    required: true,
  },
  bottomCost: {
    type: Number,
    required: true,
  },
  bottomLocation: {
    type: String,
    required: true,
  },
  shoeInfo: {
    type: String,
    required: true,
  },
  shoeCost: {
    type: Number,
    required: true,
  },
  shoeLocation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
