var User = require('../models/user.server.model.js');
// var Q = require('q');

module.exports = {
    
   createUser: function (req, res) {
      var newUser = new User();
      newUser.email = req.body.email;
      //hash out password
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save(function (err, user) {
         if (err) return res.status(500).send(err);
         else {
            req.login(user, function (error) {
               res.send(user);
            });
         }
      });
   },
   
   getUser: function (req, res) {
      User.findById(req.params.userId)
         .exec(function (err, user) {
            if (err) return res.status(500).send(err);
            else res.send(user);
         });
   },

   editUser: function (req, res) {
      //returns the updated user document
      User.findByIdAndUpdate(req.params.userId, req.body, {
         new: true,
         upsert: true
      }, function (err, user) {
         if (err) return res.status(500).send(err);
         else res.send(user);
      });
   },

   changePassword: function (req, res) {
      User.findById(req.params.id, function (err, user) {
         if (err) return res.status(500).send(err);
         user.password = req.body.password;
         user.passwordHasBeenChanged = true;
         user.save(function (err, user) {
            if (err) return res.status(500).send(err);
            res.send(user);
         });
      });
   }
};
