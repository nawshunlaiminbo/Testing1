const { Sequelize } = require("sequelize");
const subjectdata = require("../models").Subject;

const getAllSubjects = async (req, res) => {
  await subjectdata
    .findAll()
    .then((subjects) => {
      if (subjects.length > 0) {
        res.status(200).json(subjects);
      } else {
        res.status(404).json("No subject Data.");
      }
    })
    .catch((error) => {
      res.status(500).json("Error" + error.message);
    });
};

const getBySubjectId = async (req, res) => {
  await subjectdata
    .findByPk(req.params.id)
    .then((subject) => {
      if (subject) {
        res.status(200).json(subject);
      } else {
        res.status(404).json("subject not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const addSubject = async (req, res) => {
  await subjectdata
    .findOne({ where: { name: req.body.name } })
    .then((subject) => {
      if (subject != null) {
        return res.status(400).json("subject already exist.");
      } else {
        return subjectdata.create(req.body);
      }
    })
    .then(() => {
      res.status(201).json("subject created Successfully.");
    })
    .catch((err) => {
      return res.status(400).json(err.message);
    });
};

const editSubject = async (req, res) => {
  await subjectdata
    .findOne({ where: { id: req.params.id } })
    .then((subject) => {
      if (subject != null) {
        subject.update(req.body, { where: { id: req.params.id } }).then((_) => {
          res.status(200).json("subject updated");
        });
      } else {
        res.status(404).json("subject not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const deleteSubject = async (req, res) => {
  await subjectdata
    .findByPk(req.params.id)
    .then((subject) => {
      if (subject != null) {
        subject.destroy({ where: { id: req.params.id } }).then((_) => {
          res.status(200).json("subject deleted");
        });
      } else {
        res.status(404).json("subject not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

module.exports = {
  getAllSubjects,
  getBySubjectId,
  addSubject,
  editSubject,
  deleteSubject,
};
