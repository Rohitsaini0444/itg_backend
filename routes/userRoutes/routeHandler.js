var Users = require("../../models/users");

const getAll = (req, res, next) => {
  Users.find()
    .then((users) => {
      res.status(200).send({ success: true, data: users });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const get = (req, res, next) => {
  let userId = req.params.userId;
  Users.findOne({ phone: userId })
    .then((users) => {
      res.status(200).send({ success: true, data: users });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const add = (req, res, next) => {
  let data = req.body;
  let newUser = new Users(data);
  newUser.save()
    .then((user) => {
      res.status(200).send({ success: true, data: user });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: err, data: {} });
    });
};

const edit = (req, res, next) => {
  let data = req.body;
  if (data._id) {
    Users.findByIdAndUpdate(
      { _id: data._id },
      { $set: data },
      { new: true }
    ).exec(function (err, users) {
      if (err) {
        console.log(err);
        res.status(500).send({ success: false, message: err });
      } else {
        res.status(200).send({
          success: true,
          message: "User Profle Updated Successfully",
          data: users,
        });
      }
    });
  } else {
    res
      .status(403)
      .send({ success: false, message: "Invalid Users object Id" });
  }
};

module.exports = {getAll, get, add, edit};
