const jwt = require("jsonwebtoken");

module.exports.userAuth = (req, res, next) => {
  const token = req.cookies.User;
  if (token) {
    jwt.verify(token, "myhiddenemotion", (err, decoded) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/");
  }
};
