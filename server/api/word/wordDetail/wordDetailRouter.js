const router = require('express').Router();
const controller = require('./wordDetailController');
const auth =  require('../../../passportAuthentication/JWT_authentication');



router.route('/').
    get(controller.getDetials).
    post(auth.verifyUser, controller.postDetails);

router.route('/:detailId')
    .get(controller.getOneDetail)
    .delete(auth.verifyUser,controller.deleteOneDetail);

router.route( '/:detailId/upvote')
.get(auth.verifyUser, controller.upVote);

router.route('/:detailId/downvote')
    .get(auth.verifyUser, controller.dwonVote);

 module.exports = router;    