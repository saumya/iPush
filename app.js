
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var db = require('./routes/db');
var apn = require('./routes/alert');

var http = require('http');
var path = require('path');

var mongo = require('mongodb');
var hbs = require('hbs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

//app.set('view engine', 'jade');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
//mongo
app.get('/list', db.list);
//APN
app.get('/push',apn.push);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
