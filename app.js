var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

const produktyRoute=require('./routes/produktyRoute');
const zamowienieRoute=require('./routes/zamowieniaRoute');
const szczegolyZamowienieRoute=require('./routes/szczegolyZamowieniaRoute');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err=>{
      console.log(err);
    });
const proApiRouter=require('./routes/api/ProduktyApiRoute');
const zamApiRouter=require('./routes/api/ZamowienieApiRoute');
const szczApiRouter=require('./routes/api/SzczegolyZamowieniaApiRoute');

var app = express();



const fmt = require('./public/js/utils/dateFormatting');
app.use((req, res, next) => {
    res.locals.fmt = fmt;
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/produkty',produktyRoute);
app.use('/zamowienie',zamowienieRoute);
app.use('/szczegolyZamowienia',szczegolyZamowienieRoute);
app.use('/api/produkty',proApiRouter);
app.use('/api/zamowienie',zamApiRouter);
app.use('/api/szczegolyZamowienia',szczApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
