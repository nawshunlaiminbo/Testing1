const express = require("express");
const router = express.Router();
const examController = require("../controllers/ExamController");

router.get("/list", examController.getAllExams);
router.get("/getbyid/:id", examController.getByExamId);
router.post("/add", examController.addExam);
router.put("/edit/:id", examController.editExam);
router.delete("/delete/:id", examController.deleteExam);

module.exports = router;
