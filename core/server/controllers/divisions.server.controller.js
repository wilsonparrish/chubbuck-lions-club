//teams controller for signup page and management page
var Division = require("../models/division.server.model.js")

exports.createDivision = function (req, res) {
	var newDiv = new Division(req.body);
	newDiv.save(function (err, result) {
		if (err) {
			res.status(501).send(err);
		}
		res.send(result);
	});
};

exports.getDivs = function (req, res) {
	Division.find(req.query).populate('teamsIdArray')
	.exec(function(err, result) {
		if (err) {
			res.status(500).send(err);
		}
		console.log(result);
		res.send(result);
	});
};