const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');
const request = require('request')

process.env.NODE_ENV = process.env.NODE_ENV || "development" 
console.log("env:", process.env.NODE_ENV)
const port = process.env.PORT || 8080
const elasticsearchUrl = process.env.ELASTICSEARCH_URL || "http://localhost:9200" 
// for cors
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000" 

const app = express();

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
*/
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", clientUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("/flight-search", (req, res) => {
	const method = req.method.toLowerCase();
  const body = req.body;

	const headers = {
    'Content-Type': "application/json",
  }
  const url = `${elasticsearchUrl}${req.originalUrl.replace('/flight-search', "/kibana_sample_data_flights")}`
	console.log("method", method)
	console.log("url", url)
	console.log("body", body)
	const options = {
    uri: url,
    headers,
    method: 'POST',
    json: body,
  };

	request(options, (esError, esRes, esResBody) => {

		if (esError) {
      console.error("***error:***")
      console.log(esError)
      return next(esError);
    } else {
      console.log(esRes.statusCode) // 200
      console.log(esResBody) // 200

      return res.send(esResBody);
    }
  })
})



app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use('/', indexRouter);
app.use('*', (req, res, next) => {
  console.error("Missed our routes, try again")
  next(new Error("This should be a 404"))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
	console.error(err);
  res.send('error: ' + err.toString());
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
