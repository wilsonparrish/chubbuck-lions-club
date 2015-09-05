var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var gameSchema = new Schema({
  team1: { 
    id: {type: Schema.Types.ObjectId, ref: 'Team', required: true },
    name: String,
    wins: Number,
    losses: Number,
    ptsScored: Number,
    ptsAgainst: Number
  },
  team1score: { type: Number, required: true },
  team2: { 
    id: {type: Schema.Types.ObjectId, ref: 'Team', required: true },
    name: String,
    wins: Number,
    losses: Number,
    ptsScored: Number,
    ptsAgainst: Number
  },
  team2score: { type: Number, required: true },
  division: { type: Schema.Types.ObjectId, ref: 'Division' },
  court: { type: String },
  official: { type: String },
  creationdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);