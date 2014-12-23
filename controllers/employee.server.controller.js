"use strict";

var Employee = require("../models/employee.server.model");

exports.getEmployees = function (req, res, next) {

	var query = Employee.find();
	query.exec(function (err, results) {
		if (err) {
			next(new Error(err));
		} else {
			res.render('index', results);
		}
	});

};