//express is to build a quick server on NodeJS
const express = require("express");
const app = express();
//cors allows communication between different domain applications
const cors = require("cors");

app.use(express.json());
app.use(cors());

//app route
app.use("/auth", require("./routes/jwtAuth"));

//dashboard route
app.use("/dashboard", require("./routes/dashboard"));

//activating the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
