const mongoose = require('mongoose')

const EmployeesModel = mongoose.model(
    'hrnet',
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        birthdate: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
    },
    'employees'
)

module.exports = { EmployeesModel }