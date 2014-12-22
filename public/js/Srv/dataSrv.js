(function () {
	"use strict";

	var dataSrv = function () {

		var employees = [];
		var idFountain = employees.length + 1;

		var getEmployee = function (id) {
			return _.find(employees, { id: parseInt(id, 10) });
		};

		var saveEmployee = function (employee) {
			if (employee && !_.find(employees, employee)) {
				employee.id = idFountain++;
				employees.push(employee);
			}
		};

		return {
			employees: employees,
			getEmployee: getEmployee,
			saveEmployee: saveEmployee
		};
	};

	var app = angular.module('ef');
	app.factory('dataSrv', dataSrv);

})();