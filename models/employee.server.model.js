var mongoose = require('mongoose');

var memberNameValidator = [
	function (val) {
		return val.length > 0 && val.toLocaleLowerCase() != 'none';
	},
	'Select a valid Member Name'];

var requiredStringValidator = [
	function (val) {
		var trimmedVal = val.trim();
		return trimmedVal.length > 0;
	},
	'{PATH} cannot be empty'];

var employeeSchema = new mongoose.Schema({
	fullName: { type: String, validate: memberNameValidator },
	department: { type: String, validate: requiredStringValidator },
	notes: { type: String},
	perkCar: { type: Boolean, default: false},
	perkStock: { type: Boolean, default: false},
	perkSixWeeks: { type: Boolean, default: false },
	lastVisit: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);