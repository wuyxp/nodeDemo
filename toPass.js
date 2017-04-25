var str = 'hello wrold';
var key = 'abc';

var uglify = function(str,key){
    var key_index = 0;
    var key_length = key.length;
    var min_code = 32;
    var max_code = 126;
    var getKeyCode = (function(){
        var key_code = key.charCodeAt(key_index);
        if(key_code >= key_length){
            key_index = 0;
        }else{
            key_code++;
        }
        return function(){
            return key_code
        }
    })();
    var toDown = function(){
        var newStr = [];
        for(var i=0;i<str.length;i++){
            var keycode = str.charCodeAt(i) + getKeyCode();
            if(keycode > max_code){
                keycode = keycode-max_code+min_code;
            }
            newStr.push(String.fromCharCode(keycode));
        }
        key_index = 0;
        return newStr.join('');
    }
    var toFrom = function(){
        var newStr = [];
        for(var i=0;i<str.length;i++){
            var keycode = str.charCodeAt(i) - getKeyCode();
            if(keycode < min_code){
                keycode = keycode+max_code-min_code;
            }
            newStr.push(String.fromCharCode(keycode));
        }
        key_index = 0;
        return newStr.join('');
    }
    return {
        toDown : toDown,
        toFrom : toFrom
    }
}

console.log('原来的字符串是: '+str);
console.log('第一次加密字符串为：'+key);

var strCode = uglify(str,key).toDown();
console.log('加密后的字符串为:'+strCode);
var passStrCode = uglify(strCode,key).toFrom();
console.log('重新解密后的字符串为：'+passStrCode);

var str2 = 'wuyang is shuaiGe !!!';
var key2 = 'efgabc';
console.log('第二次原来的字符串为:'+str2);
console.log('第二次加密字符串为：'+key2);

var strCode2 = uglify(str2,key2).toDown();
console.log('第二次加密后的字符串为:'+strCode2);
var passStrCode2 = uglify(strCode2,key2).toFrom();
console.log('第二次重新解密后的字符串为：'+passStrCode2);
