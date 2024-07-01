const { check, validationResult } = require("express-validator");

//check if username,email and password correct

const checking = [
  check("email").isEmail().withMessage("Please provide valid email"),
  check("username")
    .isLength({ min: 5 })
    .withMessage("Please provide username with minimum 5 characters"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Please provide password with minimum 5 characters"),
];

const isValid = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return response.status(400).json({ error: errors.array() });
  }
  console.log("username & password & email are valid ");
  next();
};

module.exports = { checking, isValid };
