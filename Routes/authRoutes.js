const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const protect = require("../Middlewares/authMiddleware").userAuth;

router
  .route("/signup")
  .get(authController.getUserSignup)
  .post(authController.postUserSignup);
router.route("/signin").post(authController.postUserSignin);
router.route("/dash").get(protect, authController.getUserDash);
router.route("/logout").get(protect, authController.userLogout);
module.exports = router;
