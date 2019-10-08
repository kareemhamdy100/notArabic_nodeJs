const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
var cors = require('cors')
// setup global middleware here

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(cors());
};