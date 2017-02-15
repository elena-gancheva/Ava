const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const hbs = require('hbs');

const passport = require('passport');
const User = require('./models/user-model');
const mongoose = require('mongoose');

const routes = require('./routes/index');
const users = require('./routes/users');
const blog = require('./routes/blog');
const algorithm = require('./routes/algorithm');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const html = require('html');

const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const app = express();

webpack(webpackConfig, (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(stats);
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
//app.set('view engine', 'html');

//initialize passport
passport.use(User.createStrategy());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Create mongoose connectionS
mongoose.connect('mongodb://localhost:27017/algorithms');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/app.html'));
//     //__dirname : It will resolve to your project folder.
// });

app.use('/', routes);
app.use('/users', users);
app.use('/blog', blog);
app.use('/algorithm', algorithm);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     let err = new Error('Not Found');
//
//     err.status = 404;
//     next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function (err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

module.exports = app;
