const router = require('express').Router();
const wordModel = require('./wordModel');
const controller = require('./wordController');
const auth = require('../../passportAuthentication/JWT_authentication');

router.param('id', controller.params);

router.route('/')
   .get(controller.get)
   .post(auth.verifyUser, controller.post);

router.route('/:id')
   .get(controller.getOne);

//Todo add Authentication   
router.use('/:id/details', require('./wordDetail/wordDetailRouter'));

module.exports = router;