// routes that have to do with authentication
var usersController = require('../controllers/users.server.controller.js'),
   passport = require('passport');

module.exports = function (app, passport) {
   // app.post('/user/createParent', usersController.createParent);
   // app.post('/user/login', passport.authenticate('local'),
      // function (req, res) {
      //    var frontEndUser = req.user.toObject();
      //    delete frontEndUser.password;
      //    console.log('req.user', frontEndUser);
      //    res.status(200).send('user: ', frontEndUser);
      // }
   // );
   app.put('/user/password/:id', usersController.changePassword);
   app.get('/user/:userId', usersController.getUser);
   app.put('/user/edit/:userId', usersController.editUser);
   app.get('/logout', function (req, res) {
      req.logout();
      res.end();
   });
};