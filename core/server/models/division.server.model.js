var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var divisionSchema = new Schema({
  name: {
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
  teamsIdArray: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  gamesIdArray: [{ type: Schema.Types.ObjectId, ref: 'Game'}],
  creationdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Division', divisionSchema);