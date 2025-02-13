var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var join = require('./routes/UserJoin');
var login = require('./routes/UserLogin')
var add = require('./routes/ProductAdd')
var get = require('./routes/ProductGet')

var adds = require('./routes/AuctionAdds')
var gets = require('./routes/AuctionGets')
var bid = require('./routes/AuctionBid')
var update = require('./routes/ProductUpdate');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/userjoin', join)
app.use('/userlogin', login)
app.use('/productadd', add)
app.use('/productget', get)
app.use('/productupdate', update)
app.use('/auctiongets', gets)
app.use('/auctionadds', adds)
app.use('/auctionbid', bid)
app.use('/productupdate', update)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
