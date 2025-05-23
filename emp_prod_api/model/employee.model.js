const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: {
      type: String,
    },
   department: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
