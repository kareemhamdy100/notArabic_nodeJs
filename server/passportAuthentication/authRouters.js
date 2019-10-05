//this line to compile the passportlocal file
const local = require('./passportLocal');

const router = require('express').Router();
const passport = require('passport');
const middleware = require('./JWT_middleware');


router.post('/signup', middleware.addNewUserMiddleWare);
router.post('/login', passport.authenticate('local'), middleware.signInMiddleWare);

module.exports = router;