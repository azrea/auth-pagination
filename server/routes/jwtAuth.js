//router is a mountable,modular route handler
const router = require("express").Router();

const pool = require("../db");

//bcrypt is used to encrpyt and decode the password
const bcrypt = require("bcrypt");

const jwtGenerator = require("./utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
//register method
router.post("/register", validInfo, async (req, res) => {
  try {
    //destructure the req.body for the name email and password.
    const { name, email, password } = req.body;

    //check if the user exists and throw unauthorized status code.
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).send("User already exists");
    }

    //else Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //enter the new user into our database
    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, bcryptPassword]
    );
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
    console.log({ token });
  } catch (err) {
    console.error(err);
  }
});

//login method. here router is mounted
router.post("/login", validInfo, async (req, res) => {
  //destructure req.body
  const { email, password } = req.body;

  //check if user exists and throw error if false
  const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
    email,
  ]);

  if (user.rows.length === 0) {
    return res.status(401).send("You failed to log in. Try again");
  }

  //check if the password and email matches our database

  const validPassword = await bcrypt.compare(
    password,
    user.rows[0].user_password
  );

  if (validPassword === false) {
    return res.status(401).send("You failed to log in. Try again");
  }
  //return token
  const token = jwtGenerator(user.rows[0].user_id);
  res.json(token);
});

//verifies the existence of a valid token. uses middleware authorization which is mounted before the function.
router.get("/verify", authorization, async (req, res) => {
  try {
    //sends true if authorization says you are authorized
    res.json(true);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
