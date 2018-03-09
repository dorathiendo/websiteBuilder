var fs = require('fs-extra');
var path = require('path');

var FS = {
    getRootDir: function(){
        return path.join(__dirname, '../../');
    },

    getSiteDir: function(){
        return path.join(this.getRootDir(), 'website');
    },

    getDirectory: function(path){
        if (!fs.existsSync(this.getRootDir() + path)){

        }
    },

    createDirectory: function(path){
        fs.ensureDirSync(this.getRootDir() + path);
        return path;
    },

    writeTextFile: function(fpath, data){
        fs.writeFileSync(this.getRootDir() + fpath, data);
    }
};


module.exports = {
    FS: FS,
}