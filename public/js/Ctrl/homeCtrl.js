(function () {
	"use strict";

	var homeCtrl = function ($scope, $location, dataSrv) {

		$scope.employees = dataSrv.employees;

		$scope.showCreateEmployeeForm = function () {
			$location.path('/employeeForm');
		};

	};

	var app = angular.module('ef');
	app.controller('homeCtrl', homeCtrl);

})();