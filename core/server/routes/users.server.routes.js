// routes that have to do with authentication
var usersController = require('../controllers/users.server.controller'),
    passport = require('passport');

module.exports = function (app) {

    app.route('/signup')
        .get(usersController.renderSignup)
        .post(usersController.signup);

    app.route('/signin')
        .get(usersController.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.get('/signout', usersController.signout);
};