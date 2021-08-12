exports.computeError = (error) => {
  const code = error.code;
  var message = "";
  if (code == 11000) {
    if (error.keyPattern.username) {
      message = "Choose another one! Username already exists...";
      return message;
    } else if (error.keyPattern.email) {
      message = "Email already registered...";
      return message;
    }
  }
  return "Something wrong";
};
