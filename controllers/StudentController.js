const studentdata = require('../models').Student;
const{Sequelize} = require('sequelize');

const getAllStudents = async(req,res)=>{
    await studentdata.findAll()
    .then(students=>{
        if(students.length>0){
            res.status(200).json(students);
        }
        else{
            res.status(404).json("No Student Data.");
        }
    })
    .catch(error=>{
        res.status(500).json("Error"+error.message);
    })
}
const addStudent = async(req,res)=>{
    await studentdata.findOne({where:{name:req.body.name}})
   .then(student=>{
    if(student != null){
        return res.status(400).json("Student already exist.")
    }
    else{
        return studentdata.create(req.body);
    }
   })
   .then(()=>{
    res.status(201).json("Student created Successfully.");
   })
   .catch(err=>{
        return res.status(400).json({error: errorMessages});
})
}
module.exports = {
    getAllStudents,
    addStudent
}