const Employee = require("../models/employee");

module.exports.createEmployee = async (req, res) => {
  try {
    const { Name, age, department, dateOfJoining } = req.body; //destructuring here
    const newEmployee = new Employee({
      // creating a new employee
      Name,
      age,
      department,
      dateOfJoining,
    });
    const savedEmployee = await newEmployee.save(); // saving that employee
    res.status(201).json(savedEmployee); // status code 201 when something created
  } catch {
    (err) => {
      res.send(500).err({ message: err });
    };
  }
};

module.exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee); // status code 200 successfull
  } catch {
    (err) => {
      res.send(404).err({ message: err }); // 404 for not found
    };
  }
};

module.exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch {
    (err) => {
      res.send(404).err({ message: err }); // 404 for not found
    };
  }
};

module.exports.editEmployee = async (req, res) => {
  try {
    const { Name, age, department, dateOfJoining } = req.body;
    const employe = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        returnOriginal: false,
      }
    );
    res.status(200).json(employe);
  } catch {
    (err) => {
      res.send(500).err({ message: err });
    };
  }
};

module.exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "employee deleted", employee });
  } catch {
    (err) => {
      res.send(500).err({ message: err });
    };
  }
};
