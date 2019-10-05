const Word = require('./wordModel');


exports.params = (req, res, next, id) => {
  Word.findById(id)
    .then((word) => {
      if (!word) {
        next(new Error('No word with that id'));
      } else {
        req.word = word;
        next();
      }
    }, (err) => {
      next(err);
    });
};

// /words
getAllWords = (req, res, next) => {
  Word.find({}, { details: 0 })
    .then((words) => {
      res.json(words);
    }, (err) => {
      next(err);
    });
};
// /words?search = .. 
getWithSearchQ = (req, res, next)=>{
    Word.find({$expr:{$gt:[{$indexOfBytes: ["$word",req.query.search]},-1]} })
      .then((i)=>{
       res.json(i);
    }).catch((e)=>{
      next(e);
    })
};

exports.get  = (req, res, next)=>{
      console.log(req.query);
      if(req.query.search){ 
         getWithSearchQ(req, res, next);
      }else{
        getAllWords(req, res, next);
      }
}


exports.post = (req, res, next) => {
  Word.create(req.body)
    .then((word) => res.json(word))
    .catch((err) => {
      res.statusCode = 500;
      next(err);
    });
}

exports.getOne = (req, res, next) => {
  //this shity code to convert the array of upVotes and downVotes to numbers
  const mWord = req.word.toObject();
  mWord.details = mWord.details.map((e) => {
    e.upVote = e.upVote.length;
    e.downVote = e.downVote.length;
    return e;
  })
  res.json(mWord);
}