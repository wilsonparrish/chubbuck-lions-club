//teams controller for signup page and management page
var Team = require("../models/team.server.model.js")
var Division = require("../models/division.server.model.js")

exports.registerTeam = function (req, res) {
	var newTeam = new Team(req.body);
	newTeam.save(function (err, result) {
		if (err) {
			res.status(501).send(err);
		}
		Division.findById(req.body.division).exec(function(err, divResult){
			if(err) {
				res.status(502).send(err);
			}
			divResult.teamsIdArray.push(newTeam._id); //team has _id after .save has been called
			divResult.save(function(err, saveResult){
				if(err) {
					res.status(503).send(err);
				}
				res.send(result);
			})
		})
	});
};

exports.getTeams = function (req, res) {
	Team.find(req.query).populate('division')
	.exec(function(err, result) {
		if (err) {
			res.status(500).send(err);
		}
		console.log(result);
		res.send(result);
	});
};