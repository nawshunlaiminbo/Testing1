const express = require("express");
const router = express.Router();
const studentController = require("../controllers/StudentController");

router.get("/list", studentController.getAllStudents);
router.get("/getbyid/:id", studentController.getByStudentId);
router.post("/add", studentController.addStudent);
router.put("/edit/:id", studentController.editStudent);
router.delete("/delete/:id", studentController.deleteStudent);
router.delete("remove", studentController.removeStudent);

module.exports = router;
