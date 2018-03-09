var express = require('express');
var FS = require('./utils/utils').FS;

var router = express.Router();


/* GET home page. */
router.post('/ask', function(req, res) {
  FS.createDirectory('mails');
  FS.writeTextFile('/mails/' + req.body.email + '.' + new Date().getTime(), JSON.stringify(req.body));
  res.send(':pass');
});




module.exports = router;
