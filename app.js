var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();

process.env.NODE_ENV = process.env.NODE_ENV || "development" 
console.log("env:", process.env.NODE_ENV)

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use('/', indexRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
	console.error(err);
  res.send('error: ' + err.toString());
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
