//games controller for entering and obtaining game info
var Game = require("../models/game.server.model.js")

exports.addGame = function (req, res) {
	var newGame = new Game(req.body);
	newGame.save(function (err, result) {
		if (err) {
			res.status(501).send(err);
		}
		res.send(result);
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