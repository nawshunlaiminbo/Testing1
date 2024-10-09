const express = require("express");
const router = express.Router();
const resultController = require("../controllers/ResultController");

router.get("/list", resultController.getAllResults);

router.put("/edit/:id", resultController.editResult);
router.delete("/delete/:id", resultController.deleteResult);

module.exports = router;
