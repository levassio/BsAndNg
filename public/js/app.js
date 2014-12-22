(function () {
	"use strict";

	var app = angular.module('ef', ["ngRoute", "ui.bootstrap"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "./views/home.html",
				controller: "homeCtrl"
			})
			.when("/employeeForm/:id", {
				templateUrl: "./views/efTemplate.html",
				controller: "efCtrl"
			})
			.when("/employeeForm", {
				templateUrl: "./views/efTemplate.html",
				controller: "efCtrl"
			})
			.otherwise({
				redirectTo: "/home"
			});
	});

})();