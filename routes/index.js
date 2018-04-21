var express = require('express');
var FS = require('./utils/utils').FS;
var Mail = require('./utils/utils').mail;
var Utils = require('./utils/utils').utils;
var router = express.Router();


router.get('/processMails', function(req, res) {
    var pcount = 0, ecount = 0;
    var path = 'mails/ask';
    function send(mails) {
        if (mails.length === 0){
            res.send(Utils.formatDate(new Date()) + '--> processed passes:' + pcount + ' errors:' + ecount);
        }else {
            var file = mails.pop();
            if (!file.endsWith('.mail')) {
                send(mails);
                return;
            }
            console.log(Utils.formatDate(new Date()) + ' --> processMails(): ' + file);
            var mailObj = JSON.parse(FS.readTextFile(path + '/' + file));
            Mail.send(mailObj, function (err) {
                if (!err) {
                    pcount++;
                    FS.move(path + '/' + file, path + '/processed/' + file);
                } else {
                    ecount++;
                }
                send(mails);
            });
        }
    }send(FS.list(path));


});

router.post('/ask', function(req, res) {
  var path = 'mails/ask'
  FS.createDirectory(path);
  var mail = {
    from: 'auto.mailer@leemac.biz',
    to:   'info@leemac.biz',
    subject: req.body.subject,
    html:    '<b>Name:</b> ' + req.body.name + '<br>'
            + '<b>Email:</b> ' + req.body.email + '<br>'
              + '<b>Message:</b> ' + req.body.message + '<br>'
  }
  FS.writeTextFile(path + '/' + req.body.email + '.' + new Date().getTime() + '.mail', JSON.stringify(mail));
  res.send(':pass');
});

router.post('/promotionList', function(req, res) {
  var path = 'promotion_list';
    FS.createDirectory(path);
    FS.writeTextFile(path + '/' + req.body.email + '.' + new Date().getTime(), JSON.stringify(req.body));
    res.send(':pass');
});

router.get('/startMailThread', function(req, res){
    Mail.initThread();
    res.send(':pass');
});




module.exports = router;
