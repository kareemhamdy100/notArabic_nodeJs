const mongoose  = require('mongoose');
const Schema = mongoose.Schema;


const WordDetailSchema = new Schema({
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  example: {
    type: String,
    required: true
  },

  discription: {
    type: String,
    required: true
  },
upVote : [ {
  type: mongoose.Schema.Types.ObjectId,
  ref:'User'
}],
downVote: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
]
});

const WordSchema = new Schema({
    word: {
      type: String,
      required: true,
      unique: true,
    },
    details: [WordDetailSchema]
  });
  

module.exports =  mongoose.model('word',WordSchema); 