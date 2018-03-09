import $ from 'jquery';

export default class Utils {
    static serverComm(url, params, callback){
        if (params) {
            $.post(url, params).then(function(data){
                callback(data);
            });
        }else{
            $.get(url).then(function(data){
                callback(data);
            });
        }
    }

    static hashToString(hash){
        var s = [];
        hash.forEach(function(v, k){
            s.push(k + '=' + v);
        });
        return s.join('\n');
    }

    static hashToArray(hash){
        var a = [];
        hash.forEach(function(v, k){
            a.push({
                name: k,
                value: v
            });
        });
        return a;
    }

    static stringToHash(s){
        var h = {};
        if (!s)
            return h;
        var lines = s.split('\n');
        var lastKey = null;
        for (var i=0; i<lines.length; i++){
            var line = lines[i].split('=');
            var key = line[0];
            if (line.length === 1){
                h[lastKey] += '\n' + key;
            }else{
                h[key] = line[1];
                lastKey = key;
            }
        }
        return h;
    }
}