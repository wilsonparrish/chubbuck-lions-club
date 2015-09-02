// routes of our RESTful API
var teamsController = require('../controllers/teams.server.controller.js');

module.exports = function (app) {
    app.route('/api/registerTeam')
        .post(teamsController.registerTeam);
        
    app.route('/api/teams')
        .get(teamsController.getTeams);
        
};