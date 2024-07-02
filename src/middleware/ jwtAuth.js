const jwt = require("jsonwebtoken");

const jwtAuth = (request, response, next) => {
  let authHeader = request.headers["authorization"];
  console.log(authHeader);
  if (!authHeader)
    return response.status(401).json({ message: "You are not authorized" });

  //getting token from authHeader
  const token = authHeader;
  jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
    if (error) return response.status(401).json({ message: "unauthorized" });

    request.user = data;
  });
  next();
};

module.exports = { jwtAuth };
