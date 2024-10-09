const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoute = require("./routes/student");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/student", studentRoute);
app.listen(1818, () => {
  console.log("Server is running from 1818.");
});
