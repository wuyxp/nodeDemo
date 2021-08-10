var str = 'hhfkfkg哈哈';
function codebite(str){
    if(typeof str !== 'string'){
        return 0
    }
    var sum = 0;
    var s1 = str.match(/[\u4E00-\u9FA5]/g);
    var s2 = str.match(/[^\u4E00-\u9FA5]/g);
    console.log('原始字符串为----> '+str);
    console.log('其中包含汉字---->'+s1,'汉字长度为 * 10 --> '+s1.length*10);
    console.log('其中包含其他字符---->'+s2,"其他字符串长度为 * 3--> "+s2.length*3);
    sum = s1.length * 10 + s2.length * 3;
    return sum;
}
console.log(codebite(str));
