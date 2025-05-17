const Employee = require('../model/employee.model');

const getAllEmployees = async () => {
  return await Employee.find();
};

module.exports = { getAllEmployees };
