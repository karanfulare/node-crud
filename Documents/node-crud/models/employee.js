const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: String, // should be date
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
