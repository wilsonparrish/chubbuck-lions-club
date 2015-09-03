var gamesController = require('../controllers/games.server.controller.js');

module.exports = function (app) {
    app.route('/api/addGame')
        .post(gamesController.addGame);
        
    app.route('/api/games')
        .get(gamesController.getGames);

};