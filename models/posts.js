const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    dateOfPost: {
      type: Date,
      default: new Date(),
    },
    category: {
      type: String,
    },
    headline: {
      type: String,
    },
    article_thumbnail_image: {
      type: String,
    },
    authorId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var Posts = mongoose.model("Post", postsSchema);
module.exports = Posts;
