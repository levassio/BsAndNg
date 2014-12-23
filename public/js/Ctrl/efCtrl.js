(function () {
	"use strict";

	var efCtrl = function ($scope, dataSrv, $window, $routeParams) {

		var validation = {
			fullNameRequired: true,
			fullNameClass: "has-warning",
			departmentClass: ""
		};

		$scope.validation = validation;

		var employee = dataSrv.getEmployee($routeParams.id);
		var originalEmployee = angular.copy(employee);

		if (employee) {
			$scope.employee = employee;
		} else {
			$scope.employee = {};
		}

		$scope.openCalendar = function ($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = !$scope.opened;
		};

		$scope.departments = [
			"Engineering",
			"Marketing",
			"Finance",
			"Administration"
		];

		$scope.submitForm = function () {

			$scope.$broadcast('show-errors-event');

			if ($scope.employeeForm.$invalid) {
				return false;
			}

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