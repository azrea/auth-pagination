module.exports = function (req, res, next) {
  const { email, name, password } = req.body;
  //this is middleware. if any information is missing then return an error from the request.
  if (req.path === "/register") {
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json("Missing credentials!");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing credentials!");
    }
  }
  //next says it is alright for the function to keep going past the middleware
  next();
};
