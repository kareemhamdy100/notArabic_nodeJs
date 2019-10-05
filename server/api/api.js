
const router = require('express').Router();


const defualtOrErrorRequest =  (req, res, next) => {
    res.statusCode = 404;
    res.json(
        {
            msg: "this URL not found you can use",
            avaliapleUrls: [
                "api/login           POST",
                "api/signup          POST",
                "api/words           GET",
                "api/words?search    GET",
                "api/words/:id       GET",
                "api/words/:wordId/details              GET POST",
                "api/words/:wordId/details/:detailId    GET DELETE",
               
            ]
        });
}

router.use('/words/', require('./word/wordRoutes'));
router.use('/',defualtOrErrorRequest);

module.exports = router;
