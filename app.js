const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const request = require('request')

process.env.NODE_ENV = process.env.NODE_ENV || "development" 
console.log("env:", process.env.NODE_ENV)
const port = process.env.PORT || 8080
const elasticsearchUrl = process.env.ELASTICSEARCH_URL || "http://localhost:9200" 
// for cors
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000" 

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", clientUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/flight-search", (req, res, next) => {
  const method = req.method.toLowerCase();
  const body = req.body;

  const headers = {
    'Content-Type': "application/json",
  }
  const url = `${elasticsearchUrl}${req.originalUrl.replace('/flight-search', "/kibana_sample_data_flights")}`
  const options = {
    uri: url,
    headers,
    method: 'POST',
    json: body,
  };

  request(options, (esError, esRes, esResBody) => {
    if (esError) {
      console.log("Error getting data from ES")
      return next(esError);

    } else {
      return res.send(esResBody);
    }
  })
})

app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('*', (req, res, next) => {
  console.error("Missed our routes, try again")
  next(new Error("This should be a 404"))
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  res.send('error: ' + err.toString());
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
