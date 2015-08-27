// some general routes
var controller = require('../controllers/index.server.controller');

module.exports = function (app) {
    app.route('/')
        .get(controller.angularApp);

    app.route('/test')
        .get(controller.testView);

    app.route('/destroy')
        .get(controller.destroySession);
};