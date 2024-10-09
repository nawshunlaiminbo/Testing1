const { Sequelize } = require("sequelize");
const examdata = require("../models").Exam;

const getAllExams = async (req, res) => {
  await examdata
    .findAll()
    .then((exams) => {
      if (exams.length > 0) {
        res.status(200).json(exams);
      } else {
        res.status(404).json("No exam Data.");
      }
    })
    .catch((error) => {
      res.status(500).json("Error" + error.message);
    });
};

const getByExamId = async (req, res) => {
  await examdata
    .findByPk(req.params.id)
    .then((exam) => {
      if (exam) {
        res.status(200).json(exam);
      } else {
        res.status(404).json("Exam not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const addExam = async (req, res) => {
  await examdata
    .findOne({ where: { name: req.body.name } })
    .then((exam) => {
      if (exam != null) {
        return res.status(400).json("exam already exist.");
      } else {
        return examdata.create(req.body);
      }
    })
    .then(() => {
      res.status(201).json("exam created Successfully.");
    })
    .catch((err) => {
      return res.status(400).json(err.message);
    });
};

const editExam = async (req, res) => {
  await examdata
    .findOne({ where: { id: req.params.id } })
    .then((exam) => {
      if (exam != null) {
        exam.update(req.body, { where: { id: req.params.id } }).then((_) => {
          res.status(200).json("exam updated");
        });
      } else {
        res.status(404).json("exam not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const deleteExam = async (req, res) => {
  await examdata
    .findByPk(req.params.id)
    .then((exam) => {
      if (exam != null) {
        exam.destroy({ where: { id: req.params.id } }).then((_) => {
          res.status(200).json("exam deleted");
        });
      } else {
        res.status(404).json("exam not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

module.exports = {
  getAllExams,
  getByExamId,
  addExam,
  editExam,
  deleteExam,
};
