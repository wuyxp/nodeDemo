console.log('测试');
var str = '1是一段内容2是一段内容3是一段内容4是一段内容5是一段内容6是一段内容7是一段内容8是一段内容9是一段内容';
function spliceStr(str, num) {
    var arr = [];
    if(typeof str !== 'string' || isNaN(num)) {
        return arr;
    }
    var reg = new RegExp(".{1,"+num+"}","g");
    var result = "";
    while((result = reg.exec(str)) !== null){
        arr.push(result[0]);
    }
    return arr;
}

console.log('原字符串------->');
console.log(str);
console.log('------------');
console.log('格式化后字符串---->');
console.log(spliceStr(str, 6));
console.log('------------');
console.log(spliceStr(str, 5));


//['我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容','我是一段内容'];
