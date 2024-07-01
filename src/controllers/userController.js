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

    const isUsersExist = await Users.findOne({ email });

    if (isUsersExist) {
      return response.json({ message: "This user already exist" });
    }

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

module.exports = { getAllUsers, createUser };
