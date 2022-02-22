const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    //if there is not token return an error status code.
    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }
    //else check if the token is valid with the verify method.
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    //returns payload from authorization. pretty nifty.
    req.user = payload.user;
  } catch (err) {
    console.error(err);
    return res.status(403).json("Not Authorized");
  }

  next();
};
