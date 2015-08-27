//teams controller for signup page and management page
var Team = require("../models/team.server.model.js")

exports.registerTeam = function(req, res) {
	var newTeam = new Team(req.body);
	newTeam.save(function(err, result){
		if(err){
			res.send(err);
		}
		res.send(result);
	});
};