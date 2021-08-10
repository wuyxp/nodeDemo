
function isMatch(s,p){
    if(!p) return false;
    var p = p.match(/[\w.](\*)?/g);
    var s_index = 0;
    var p_index = 0;
    var last_index = 0;
    var temp = '';
    for(var i =0 ; i < s.length; i++){
        if(p[p_index] == undefined) return false;
        if(p[p_index].length == 2){
            if(p[p_index][0] === '.'){
                return true
            }else if(s[s_index] !== p[p_index][0]){
                s_index++;
                p_index++;
            }else{
                s_index++;
            }
        }else if(p[p_index] === '.'){
            s_index++;
            p_index++;
        }else{
            if(s[s_index] !== p[p_index]){
                return false;
            }else{
                s_index++;
                p_index++;
            }
        }
    }    
    if(s_index >= s.length){
        return true;
    }else{
        return false;
    }
}
console.log(isMatch("aa","a")) // false
console.log(isMatch("a","")) // false
console.log(isMatch("aa","aa")) // true
console.log(isMatch("aaa","aa")) // false
console.log(isMatch("ab",".*c")) // false
console.log(isMatch("aa", "a*")) // true
console.log(isMatch("aa", ".*")) // true
console.log(isMatch("ab", ".*")) // true
console.log(isMatch("aab", "c*a*b")) // true
