const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./config/config');
const addGlobalMiddleWare = require('./middleware/appMiddleware');
const authRouter = require('./passportAuthentication/authRouters');
const apiRouter =  require('./api/api');


//to remove warrning massages
mongoose.connect(config.dbURL,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    });


addGlobalMiddleWare(app);

app.use('/auth', authRouter);
app.use('/api', apiRouter);
  
module.exports = app;