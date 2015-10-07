// user model
var mongoose = require('mongoose'),
   bcrypt = require('bcrypt-nodejs'),
   Schema = mongoose.Schema;

var userSchema = new Schema({
   
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   //match checks for valid emails
   email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      //select: false
   },
   passwordHasBeenChanged: {
      type: Boolean,
      default: false
   },
   created_at: {
      type: Date,
      default: Date.now,
      required: true
   }
   
});


//this only runs on user.save() it won't work work with user.update()
userSchema.pre('save', function (next) {
   console.log('presave loaded');
   var user = this;
   bcryptPasswordChecker(user, next);
});


//methods for the user schema
userSchema.methods.validPassword = function (password) {
   console.log(password);
   var newPass = this.generateHash(password);
   console.log('bcrypt compare');
   console.log(bcrypt.compareSync(password, this.password));
   return bcrypt.compareSync(password, this.password);
};


//Password encryption methods
userSchema.methods.generateHash = function (password) {
   console.log('bcrypt hash');
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


var bcryptPasswordChecker = function (user, next) {
   if (!user.isModified) {
      console.log('error password is the same');
      return next();
   }

   bcrypt.genSalt(8, function (err, salt) {
      console.log('bcrypt.genSalt');
      if (err) {
         console.log('error');
         return next(err);
      }

      bcrypt.hash(user.password, salt, null, function (err, hash) {
         if (err) return next(err);
         console.log('my password: ', user.password);
         user.password = hash;
         console.log(user.password);
         next();
      });
   });
};


module.exports = mongoose.model('User', userSchema);
