var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var scoreSchema = new Schema({
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

module.exports = mongoose.model('Score', scoreSchema);