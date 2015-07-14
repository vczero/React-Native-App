var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require('async');
var routes = require('./routes/routes');
var app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var server = http.createServer(app);
server.listen(app.get('port'));

server.on('listening', function(){
  console.log('----------listening on port: ' + app.get('port') +'----------------------');
});


server.on('error', function(error){
  switch (error.code) {
    case 'EACCES':
      console.error(bind + '需要权限许可');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + '端口已被占用');
      process.exit(1);
      break;
    default:
      throw error;
  }
});


//加载路由
async.waterfall([
  function(callback){
    routes(app);
    callback(null);
  },
  function(){
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('404/error', {
          message: err.message,
          error: err
        });
      });
    }

    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('404/error', {
        message: err.message,
        error: {}
      });
    });
  }
]);


