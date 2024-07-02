const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (request, response) => {
  try {
    const queryResult = await Users.find();
    response.json(queryResult);
  } catch (error) {
    response.json({ message: "failed to fetch users from database" });
  }
};

const createUser = async (request, response) => {
  try {
    const { username, password, email } = request.body;

    //check if user exist in database
    const isUsersExist = await Users.findOne({ email });

    if (isUsersExist) {
      return response.json({ message: "This user already exist" });
    }

    //if user not exist in database,then we change password to hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    const queryResult = await Users.create({
      username,
      password: hashedPassword,
      email,
    });
    return response.json({
      message: "user is added successfully",
      data: queryResult,
    });
  } catch (error) {
    response.json({ message: "failed to create users to database" });
  }
};

const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    //check if user exist/has been registered in database
    const isUserRegistered = await Users.findOne({ email });

    //if user not registered yet
    if (!isUserRegistered)
      return response.json({ message: "invalid credentials" });

    //if user exist,check and compare the hashed password
    const isMatched = await bcrypt.compare(password, isUserRegistered.password);
    if (!isMatched) return response.json({ message: "invalid credentials" });

    //if isMatched is true,then send the access token
    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return response.json({
      message: "logged in successfully",
      data: isUserRegistered,
      accessToken,
    });
  } catch (error) {
    console.log(error.message);
    return response.json({ message: "cant login" });
  }
};

module.exports = { getAllUsers, createUser, login };
