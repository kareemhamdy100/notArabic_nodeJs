const passport = require('passport');
const User = require('./UserModel');
const config = require("../config/config");
const JWtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.sercretKey;

//this extract data from  comming token and check if the user in the database or not
jwtPassport = passport.use(new JWtStrategy(opts, 
    (jwt_payload, done)=>{
        console.log("JWT payLoad ",jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user)=>{
            if(err){
                return done(err, false);
            }
            else if (user ){
                return done(null, user);
            }else {
                return done(null, false);
            }
        })
    }));

//when login at First time  this method used to create token     
exports.getToken = (userID) => {
    return jwt.sign(userID, config.sercretKey,
         {expiresIn: 3600});
};

// this is meddleware that check the token-header and using the JWTStreatgy 
exports.verifyUser = passport.authenticate('jwt',{session: false});   