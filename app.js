const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const authRouter = require("./Routes/authRoutes");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 9999;
const DB =
  "mongodb+srv://rahulsharma:rahul123@majorproject.28iud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views"));
app.set("view engine", "ejs");
app.use(cookieParser());

app.use(authRouter);

app.get("/", (req, res) => {
  res.render("landing", {
    registered: false,
  });
});

app.post("/signup", (req, res) => {
  const { name, username, email, pass } = req.body;
});

app.listen(PORT, () => console.log("App running at port:" + PORT));
