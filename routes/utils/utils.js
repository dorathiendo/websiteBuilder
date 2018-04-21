var file = require('fs');
var fs = require('fs-extra');
var path = require('path');
var nodemailer = require('nodemailer');
var java = require('java4node');
var _ = require('lodash');
var moment = require('moment');
var http = require('http');
let Client = require('node-rest-client').Client;

var utils = {
    formatDate: function(date, pattern){
        return moment(date).format(pattern? pattern:'MMMM Do YYYY, h:mm:ss a');
    },
};

var FS = {
    getRootDir: function(){
        return path.join(__dirname, '../../');
    },

    getSiteDir: function(){
        return path.join(this.getRootDir(), 'website');
    },

    list: function(path){
        path = this.getRootDir() + path;
        if (fs.existsSync(path)){
            return fs.readdirSync(path);
        }
    },

    createDirectory: function(path){
        fs.ensureDirSync(this.getRootDir() + path);
        return path;
    },

    writeTextFile: function(fpath, data){
        fs.writeFileSync(this.getRootDir() + fpath, data);
    },

    readTextFile: function(path){
        return file.readFileSync(this.getRootDir() + path);
    },

    move: function(src, dest){
        fs.move(this.getRootDir() + src, this.getRootDir() + dest, function (err) {
            if (err) {
                throw err;
            }
        });
    },
};

var mail = {
    initThread: function(){
        java.multiThreading({
            one: function(callback) {
                var url = 'http://localhost/server/processMails';
                console.log(utils.formatDate(new Date()) + '--> Start Worker Thread.');
                function mailerThread() {
                    console.log(utils.formatDate(new Date()) + "--> processMails thread executing...");
                    Http.get(url, function(msg){
                        console.log(msg.toString());
                        setTimeout(mailerThread, 10000);
                    });
                } mailerThread();
            },
        }, function(err, results) {
            console.log(new Date().toLocaleString() + '--> Thread has exited: ' + err + ':' + results);
        });
    },

    send: function (mail, callback) {
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'auto.mailer@leemac.biz',
                    pass: 'Leemac2018!'
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: mail.from, // sender address
                to: mail.to, // list of receivers
                subject: mail.subject, // Subject line
                text: mail.message? mail.message:'', // plain text body
                html: mail.html? mail.html:'' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(callback(error));
                }else {
                    console.log('Message sent: %s', info.messageId);
                    callback();
                }
            });
        });
    }
};

var Http = {
    get: function (url, callback) {
        new Client().get(url, function (data) {
            callback(data);
        });
    },

    post: function (url, params, callback) {
        var args = {
            parameters: params,
            headers: {"Content-Type": "application/json"}
        };
        new Client().post(url, args, function (data) {
            callback(data);
        });
    },
};


// mail.send({
//     from: 'auto.mailer@leemac.biz',
//     to: 'phanpdo@gmail.com',
//     subject: 'test',
//     message: 'test message',
// });
// mail.initThread();

module.exports = {
    FS: FS,
    mail: mail,
    utils: utils,
    Http: Http,
}