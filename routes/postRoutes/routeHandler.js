var Posts = require("../../models/posts");

const getAll = (req, res, next) => {
  Posts.find()
    .then((posts) => {
      res.status(200).send({ success: true, data: posts });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const get = (req, res, next) => {
  let postId = req.params.postId;
  Posts.findOne({ _id: postId })
    .then((posts) => {
      res.status(200).send({ success: true, data: posts });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const add = (req, res, next) => {
  let data = req.body;
  let newPost = new Posts(data);
  newPost
    .save()
    .then((post) => {
      res.status(200).send({ success: true, data: post });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const edit = (req, res, next) => {
  let data = req.body;
  if (data._id) {
    Posts.findByIdAndUpdate(
      { _id: data._id },
      { $set: data },
      { new: true }
    ).exec(function (err, posts) {
      if (err) {
        console.log(err);
        res.status(500).send({ success: false, message: err });
      } else {
        res.status(200).send({
          success: true,
          message: "User Profle Updated Successfully",
          data: posts,
        });
      }
    });
  } else {
    res
      .status(403)
      .send({ success: false, message: "Invalid Posts object Id" });
  }
};

module.exports = { getAll, get, add, edit };
