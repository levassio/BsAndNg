(function () {
	"use strict";

	var efDir = function () {
		return {
			restrict: 'E',
			templateUrl: './views/efTemplate.html'
		};
	};

	var app = angular.module('ef');
	app.directive('employeeForm', efDir);

})();
