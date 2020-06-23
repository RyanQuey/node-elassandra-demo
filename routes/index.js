var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. For serving React files in prod. In Dev*/
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = router;
