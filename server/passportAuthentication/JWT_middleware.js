const passport = require('passport');
const User = require('./UserModel');
const JWT_Auth = require('./JWT_authentication');

exports.addNewUserMiddleWare = (req, res, next) => {
    User.register(new User({ username: req.body.username }),
        req.body.password,
        (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('content-type', 'application/json');
                res.json({ err: err });
            } else {
                user.save((err, user) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('content-type', 'application/json');
                        res.json({ err: err });
                        return;
                    }
                    passport.authenticate('local')(req, res, () => {
                        res.statusCode = 200;
                        res.setHeader('content-type', 'application/json');
                        res.json({ sucess: true, status: 'Registration Successful!' });
                    });
                });
            }
        });
}

exports.signInMiddleWare = (req, res, next) => {
    const token = JWT_Auth.getToken({ _id: req.user._id });
    res.json({
        sucess: true,
        token: token,
        status: 'You are successfully loggin'
    });
}
