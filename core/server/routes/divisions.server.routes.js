var divisionsController = require('../controllers/divisions.server.controller.js');

module.exports = function (app) {
    app.route('/api/createDivision')
        .post(divisionsController.createDivision);
        
    app.route('/api/divisions')
        .get(divisionsController.getDivs);

};