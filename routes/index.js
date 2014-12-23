var express = require("express");
var employeeController = require('../controllers/employee.server.controller.js');

var router = express.Router();

router.get('/', employeeController.getEmployees);

module.exports = router;