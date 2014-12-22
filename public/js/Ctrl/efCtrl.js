(function () {
	"use strict";

	var efCtrl = function ($scope, dataSrv, $window, $routeParams) {

		var employee = dataSrv.getEmployee($routeParams.id);
		var originalEmployee = angular.copy(employee);

		if (employee) {
			$scope.employee = employee;
		} else {
			$scope.employee = {};
		}

		$scope.departments = [
			"Engineering",
			"Marketing",
			"Finance",
			"Administration"
		];

		$scope.submitForm = function () {
			dataSrv.saveEmployee($scope.employee);
			$window.history.back();
			return false;
		};

		$scope.cancelForm = function () {
			angular.copy(originalEmployee, $scope.employee);
			$window.history.back();
		};
	};

	var app = angular.module('ef');
	app.controller('efCtrl', efCtrl);

})();