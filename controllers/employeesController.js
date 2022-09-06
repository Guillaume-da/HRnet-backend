const express = require('express')
const router = express.Router()
const ObjectID = require('mongoose').Types.ObjectId

const { EmployeesModel } = require('../models/employeesModel')

router.get('/', (req, res)=> {
    EmployeesModel.find((err, employees)=> {
        if(!err) res.send(employees)
        else console.log("Error",err)
    })
})

router.post('/', (req, res)=> {
    const newRecord = new EmployeesModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate,
        department: req.body.department,
        birthdate: req.body.birthdate,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    })
    newRecord.save((err, employees) => {
        if(!err) res.send(employees)
        else console.log(err)
    })
})

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    const updateRecord = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate,
        department: req.body.department,
        birthdate: req.body.birthdate,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    }
    EmployeesModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, employees) => {
            if (!err) res.send(employees)
            else console.log(err)
        }
    )
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknow : ' + req.params.id)

    EmployeesModel.findByIdAndRemove(
        req.params.id,
        (err, employees) => {
            if(!err) res.send(employees)
            else console.log(err)
        }
    )
})

module.exports = router