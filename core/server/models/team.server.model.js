var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var teamSchema = new Schema({
  teamname: { type: String },
  company: { type: String },
  division: { type: Schema.Types.ObjectId, ref: 'Division' },
  // division: {
  //   type: String,
  //   enum: [
  //     'preNBA',
  //     'Liam',
  //     'Keegan',
  //     'Ross A',
  //     'Ross B',
  //     'Competitive',
  //     'Bill'
  //   ]
  // },
  companynum: { type: String, minlength: 7 },
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  member1: { type: String },
  player1email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  member2: { type: String },
  player2email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  member3: { type: String },
  player3email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  member4: { type: String },
  player4email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  shirtsize1: {
    type: String,
    enum: [
      'NA',
      'YS',
      'YM',
      'YL',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL'
    ]
  },
  shirtsize2: {
    type: String,
    enum: [
      'NA',
      'YS',
      'YM',
      'YL',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL'
    ]
  },
  shirtsize3: {
    type: String,
    enum: [
      'NA',
      'YS',
      'YM',
      'YL',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL'
    ]
  },
  shirtsize4: {
    type: String,
    enum: [
      'NA',
      'YS',
      'YM',
      'YL',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL'
    ]
  },
  wins: Number,
  losses: Number,
  ptsScored: Number,
  ptsAgainst: Number,
  // tournamentYear {
  //   type: Date,
  //   default: Date.getFullYear(); 
  // },
  creationdate: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('Team', teamSchema);