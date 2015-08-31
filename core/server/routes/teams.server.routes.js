// routes of our RESTful API
var teamsController = require('../controllers/teams.server.controller.js');

module.exports = function (app) {
    app.route('/api/registerTeam')
        .post(teamsController.registerTeam);
        
    app.route('/api/teams')
        .get(teamsController.getTeams);

    // app.route('/api/sightings/:bird_id')
    //     .get(birdsController.getBird)
    //     .put(birdsController.putBird)
    //     .delete(birdsController.deleteBird);
};