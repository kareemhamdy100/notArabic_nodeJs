//details

exports.getDetials = (req, res, next) => {
    const word = req.word;
    res.json(word.details);
}

exports.postDetails = (req, res, next) => {
    const word = req.word;
    req.body.author = req.user._id;
    word.details.push(req.body);
    word.save().
        then((word) => {
            res.json(word);
        }).catch(err => {
            next(err);
        });
}

// onedetatil 
exports.getOneDetail = (req, res, next) => {
    const word = req.word;
    const detail = word.details.id(req.params.detailId);
    if (detail) { res.json(detail); }
    else { next(new Error("there no detail with that id ")); }

};

exports.deleteOneDetail = (req, res, next) => {
    const word = req.word;
    const detail = word.details.id(req.params.detailId);
    if (detail) {
        if (req.user._id.equals(detail.author)) {
            detail.remove();
            word.save()
                .then((mWord) => {
                    res.json(mWord);
                }
                ).catch(err => {
                    next(new Error(err));
                })
        } else {
            next(new Error('unautherized to delete this item'));
        }
    }
    else { next(new Error("there no detail with that id ")); }
};


//up_down Vote  is helper function
//addTo and removeFrom  are Arrays; 
const up_down = (addTo, removeFrom, userId) => {
    if (removeFrom.includes(userId)) {
        removeFrom.remove(userId);
    }
    if (addTo.includes(userId)) {
        return false;
    } else {
        addTo.push(userId);
        return true;
    }
}

exports.upVote = (req, res, next) => {
    const word = req.word;
    const detail = word.details.id(req.params.detailId);
    if (detail) {
        if (up_down(detail.upVote, detail.downVote, req.user._id)) {
            word.save().then(
                (i) => {
                    res.json({ status: "sucess", upVote: true });
                }
            ).catch((err) => {
                next(new Error("there no detail with that id "));
            });
        } else {
            res.json({ status: "Already voted", upVote: false });
        }
    }
}

exports.dwonVote = (req, res, next) => {
    const word = req.word;
    const detail = word.details.id(req.params.detailId);
    if (detail) {
        if (up_down(detail.downVote, detail.upVote, req.user._id)) {
            word.save().then(
                (i) => {
                    res.json({ status: "sucess", downVote: true });
                }
            ).catch((err) => {
                next(new Error("there no detail with that id "));
            });
        } else {
            res.json({ status: "Already down voted", downVote: false });
        }
    }
}



