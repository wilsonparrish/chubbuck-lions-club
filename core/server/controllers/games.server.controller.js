//games controller for entering and obtaining game info
var Game = require("../models/game.server.model.js");
var Team = require("../models/team.server.model.js");
var Division = require("../models/division.server.model.js");

exports.addGame = function (req, res) {
	var newGame = new Game(req.body);
	newGame.save(function (err, result) {
		if (err) {
			console.log(err);
			res.status(504).send(err);
		}
		Team.findById(req.body.team1._id).exec(function(err, result){
			if(err) {
				res.status(505).send(err);
			}
			if(newGame.team1score > newGame.team2score){
				result.wins = result.wins + 1;
			} else {
				result.losses = result.losses + 1;
			}
			result.ptsScored = result.ptsScored + newGame.team1score;
			result.ptsAgainst = result.ptsAgainst + newGame.team2score;
			console.log("team1result", result);
			result.save(function(err, saveResult){
				if(err) {
					res.status(506).send(err);
				}
			})
		})
		Team.findById(req.body.team2._id).exec(function(err, result){
			if(err) {
				res.status(507).send(err);
			}
			if(newGame.team2score > newGame.team1score){
				result.wins = result.wins + 1;
			} else {
				result.losses = result.losses + 1;
			}
			result.ptsScored = result.ptsScored + newGame.team2score;
			result.ptsAgainst = result.ptsAgainst + newGame.team1score;
			console.log("team2result", result);
			result.save(function(err, saveResult){
				if(err) {
					res.status(508).send(err);
				}
			})
		})
		Division.findById(req.body.division).exec(function(err, divResult){
			if(err) {
				res.status(509).send(err);
			}
			divResult.gamesIdArray.push(newGame._id); 
			divResult.save(function(err, saveResult){
				if(err) {
					res.status(510).send(err);
				}
				res.send(result);
			})
		})
	});
};

exports.getGames = function (req, res) {
	Game.find(req.query)
	.exec(function(err, result) {
		if (err) {
			res.status(500).send(err);
		}
		console.log(result);
		res.send(result);
	});
};