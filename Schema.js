const { Schema, model } = require("mongoose");

const salarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
});

const Salary = model("Salary", salarySchema);
module.exports = Salary;
