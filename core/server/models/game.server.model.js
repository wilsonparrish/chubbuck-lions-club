var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var gameSchema = new Schema({
  team1: { type: Schema.Types.ObjectId, ref: 'Team', required: true },   //these three need to be related to the team schema
  team2: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  division: {
    type: String,
    enum: [
      'preNBA',
      'Liam',
      'Keegan',
      'Ross A',
      'Ross B',
      'Competitive',
      'Bill'
    ],
    required: true
  },
  court: { type: String },
  official: { type: String },
  creationdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);