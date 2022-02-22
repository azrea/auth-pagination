const router = require("express").Router();
const pool = require("../db");

const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      req.user,
    ]);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json("Sever error");
  }
});

module.exports = router;
