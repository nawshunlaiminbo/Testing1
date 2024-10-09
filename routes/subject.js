const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/SubjectController");

router.get("/list", subjectController.getAllSubjects);
router.get("/getbyid/:id", subjectController.getBySubjectId);
router.post("/add", subjectController.addSubject);
router.put("/edit/:id", subjectController.editSubject);
router.delete("/delete/:id", subjectController.deleteSubject);

module.exports = router;
