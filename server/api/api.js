
const router = require('express').Router();


const defualtOrErrorRequest =  (req, res, next) => {
    res.statusCode = 404;
    res.json(
        {
            msg: "this URL not found you can use",
            avaliapleUrls: [
                "api/login           POST",
                "api/signup          POST",
                "api/words           GET POST",
                "api/words?search    GET",
                "api/words/:id       GET",
                "api/words/:wordId/details              GET POST",
                "api/words/:wordId/details/:detailId    GET DELETE",
                "api/words/:wordId/details/:detailId/upvote    GET",
                "api/words/:wordId/details/:detailId/downvote    GET"
               
            ]
        });
}

router.use('/words/', require('./word/wordRoutes'));
router.use('/',defualtOrErrorRequest);

module.exports = router;
