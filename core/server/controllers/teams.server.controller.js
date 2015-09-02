//teams controller for signup page and management page
var Team = require("../models/team.server.model.js")

exports.registerTeam = function (req, res) {
	var newTeam = new Team(req.body);
	newTeam.save(function (err, result) {
		if (err) {
			res.status(501).send(err);
		}
		res.send(result);
	});
};

exports.getTeams = function (req, res) {
	Team.find(req.query) //.populate('division')
	.exec(function(err, result) {
		if (err) {
			res.status(500).send(err);
		}
		console.log(result);
		res.send(result);
	});
};