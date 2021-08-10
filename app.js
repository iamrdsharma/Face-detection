const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 9999;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", (req, res) => {
  const { name, username, email, pass } = req.body;
});
app.get("/dash", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => console.log("App running at port:" + PORT));
