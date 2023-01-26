const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.get("/", employeeController.getEmployee);
router.post("/create", employeeController.createEmployee);
router.get("/get/:id", employeeController.getEmployeeById);
router.delete("/delete/:id", employeeController.deleteEmployee);
router.put("/edit/:id", employeeController.editEmployee);

module.exports = router;

//pathik.patel@greentiger.in
