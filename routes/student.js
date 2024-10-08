const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");

router.get("/list", studentController.getAllStudents);
router.post("/add", studentController.addStudent);
router.put("/edit/:id", studentController.editStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
