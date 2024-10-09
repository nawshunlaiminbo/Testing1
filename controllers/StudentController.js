const { Sequelize } = require("sequelize");
const studentdata = require("../models").Student;

const getAllStudents = async (req, res) => {
  await studentdata
    .findAll()
    .then((students) => {
      if (students.length > 0) {
        res.status(200).json(students);
      } else {
        res.status(404).json("No Student Data.");
      }
    })
    .catch((error) => {
      res.status(500).json("Error" + error.message);
    });
};

const getByStudentId = async (req, res) => {
  await studentdata
    .findByPk(req.params.id)
    .then((student) => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json("student not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const addStudent = async (req, res) => {
  await studentdata
    .findOne({ where: { name: req.body.name } })
    .then((student) => {
      if (student != null) {
        return res.status(400).json("Student already exist.");
      } else {
        return studentdata.create(req.body);
      }
    })
    .then(() => {
      res.status(201).json("Student created Successfully.");
    })
    .catch((err) => {
      return res.status(400).json(err.message);
    });
};
const removeStudent = async (req, res) => {
  await studentdata
    .findByPk(req.params.id)
   .then((student) => {
      if (student!= null) {
        return student.destroy();
      } else {
        return res.status(404).json("Student not found.");
      }
    })
   .then(() => {
      res.status(200).json("Student deleted Successfully.");
    })
   .catch((err) => {
      res.status(500).json("Error" + err.message);
    });
};


const editStudent = async (req, res) => {
  await studentdata
    .findOne({ where: { id: req.params.id } })
    .then((student) => {
      if (student != null) {
        student.update(req.body, { where: { id: req.params.id } }).then((_) => {
          res.status(200).json("student updated");
        });
      } else {
        res.status(404).json("student not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const deleteStudent = async (req, res) => {
  await studentdata
    .findByPk(req.params.id)
    .then((student) => {
      if (student != null) {
        student.destroy({ where: { id: req.params.id } }).then((_) => {
          res.status(200).json("student deleted");
        });
      } else {
        res.status(404).json("student not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};
module.exports = {
  getAllStudents,
  getByStudentId,
  addStudent,
  editStudent,
  deleteStudent,
  removeStudent
};
