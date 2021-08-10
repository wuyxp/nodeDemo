/*
垃圾代码，毁我青春！
function *app (){
};
const preCallback = [];
const postCallback = [];
app.use = fun => {
  //省略校验fun函数
  let str = fun.toString();
  str = str.replace(/[^\S]+/g,'');
  let f1 = str.match(/\{(.*)next\(\)/)[1];
  let f2 = str.match(/next\(\)(.*)}/)[1];
  preCallback.push(f1);
  postCallback.unshift(f2)
}
setTimeout(() => {
  preCallback.map(_ => _ && eval(_));
},0);
setTimeout(() => {
  postCallback.map(_ => _ && eval(_));
},0);
*/
//实现co
function co(generator){
  const gen = generator();
  const next = function(data){
    const result = gen.next(data);
    const {value, done} = result;
    const f = v => next(v);
    if(!done){
      if(value instanceof Promise){
        value.then(f,f);
      }else{
        f(value)
      }
    }
  }
  next();
}
function use(fun){
  let ctx = 'app';
  fun(ctx,next)
}
//模拟koa2 use的实现
const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}
const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}
const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}
use(one);
use(two);
use(three);
/**
 * >> one
 * >> two
 * >> three
 * << three
 * << two
 * << one
 */
