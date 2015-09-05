//controller for generating and obtaining division data
var Division = require("../models/division.server.model.js")

exports.createDivision = function (req, res) {
	var newDiv = new Division(req.body);
	// newDiv.year = new Date.getFullYear();
	newDiv.save(function (err, result) {
		if (err) {
			res.status(501).send(err);
		}
		res.send(result);
	});
};

exports.getDivs = function (req, res) {
	Division.find(req.query)
	.populate('teamsIdArray')
	.populate('gamesIdArray')
	.exec(function(err, result) {
		if (err) {
			res.status(500).send(err);
		}
		console.log(result);
		res.send(result);
	});
};