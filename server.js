var http = require("http");
var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var logger = require("morgan");

mongoose.connect("mongodb://levassio:test@ds045970.mongolab.com:45970/bsandng");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use('/', routes);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;