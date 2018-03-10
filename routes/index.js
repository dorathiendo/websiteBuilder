var express = require('express');
var FS = require('./utils/utils').FS;

var router = express.Router();


/* GET home page. */
router.post('/ask', function(req, res) {
  var path = 'mails/ask'
  FS.createDirectory(path);
  FS.writeTextFile(path + '/' + req.body.email + '.' + new Date().getTime(), JSON.stringify(req.body));
  res.send(':pass');
});

router.post('/promotionList', function(req, res) {
  var path = 'promotion_list';
    FS.createDirectory(path);
    FS.writeTextFile(path + '/' + req.body.email + '.' + new Date().getTime(), JSON.stringify(req.body));
    res.send(':pass');
});




module.exports = router;
