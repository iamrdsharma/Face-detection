const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const errors = require("../Controllers/errorController");

const expiresIn = 3 * 24 * 60 * 60;
const createToken = (id) =>
  jwt.sign({ id }, "myhiddenemotion", {
    expiresIn,
  });
exports.getUserSignup = (req, res) => {
  res.status(200).render("signup");
};

exports.postUserSignup = async (req, res) => {
  const { name, username, email, pass } = req.body;
  try {
    var newUser = new User({
      name,
      username,
      email,
      password: pass,
    });
    await newUser.save().then((doc) => {
      res.status(201).render("landing", {
        registered: true,
      });
    });
  } catch (err) {
    const error = errors.computeError(err);
    res.status(400).send(error);
  }
};
exports.postUserSignin = async (req, res) => {
  const { email, pass } = req.body;
  const userLog = await User.findOne({ email });
  if (userLog) {
    if (pass === userLog.password) {
      const token = createToken(userLog._id);
      res.cookie("User", token, { httpOnly: true, maxAge: expiresIn * 1000 });
      res.redirect("/dash");
    } else {
      res.send(400).send("Email or Password not correct");
    }
  } else {
    res.send(404).send("User not found");
  }
};

exports.getUserDash = (req, res) => {
  res.render("index");
};
exports.userLogout = (req, res) => {
  res.cookie("User", "", { maxAge: 1 });
  res.redirect("/");
};
