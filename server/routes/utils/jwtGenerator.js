//jwt generates a web token that lets a valid user have access to your app
const jwt = require("jsonwebtoken");
//config will parse your env files and assign it to process.env and return an object with a parsed key or an error message
require("dotenv").config();

function jwtGenerator(user_id) {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;
