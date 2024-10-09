const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoute = require("./routes/student");
const subjectRoute = require("./routes/subject");
const resultRoute = require("./routes/result");
const examRoute = require("./routes/exam");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/student", studentRoute);
app.use("/subject", subjectRoute);
app.use("/result", resultRoute);
app.use("/exam", examRoute);
app.listen(1818, () => {
  console.log("Server is running from 1818.");
});
