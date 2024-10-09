const { Sequelize } = require("sequelize");
const resultdata = require("../models").Result;

const getAllResults = async (req, res) => {
  await resultdata
    .findAll()
    .then((results) => {
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(404).json("No results Data.");
      }
    })
    .catch((error) => {
      res.status(500).json("Error" + error.message);
    });
};

const editResult = async (req, res) => {
  await resultdata
    .findOne({ where: { id: req.params.id } })
    .then((result) => {
      if (result != null) {
        result.update(req.body, { where: { id: req.params.id } }).then((_) => {
          res.status(200).json("result updated");
        });
      } else {
        res.status(404).json("result not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

const deleteResult = async (req, res) => {
  await resultdata
    .findByPk(req.params.id)
    .then((result) => {
      if (result != null) {
        result.destroy({ where: { id: req.params.id } }).then((_) => {
          res.status(200).json("result deleted");
        });
      } else {
        res.status(404).json("result not found");
      }
    })
    .catch((err) => {
      res.status(500).json("Error : " + err);
    });
};

module.exports = {
  getAllResults,

  editResult,
  deleteResult,
};
