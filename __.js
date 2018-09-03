/**
 * 模拟loadsh函数
 */

 /**
  * _.get(object, path, [defaultValue])
  * 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
  */
const __ = {
  get(object, path, defaultValue){
    if(Object.prototype.toString.call(object) !== '[object Object]'){
      throw new Error('object 必须是对象')
    }else{
      let params = [];
      if( typeof path === 'string'){
        params = path.split('.');
      }else if(Object.prototype.toString.call(path) === '[object Array]'){
        params = path;
      }else{
        throw new Error('path 必须是个字符串或者数组')
      }

      while(params.length>0){
        // console.log(params);
        let key = params.shift();
        // console.log(key);
        if(object[key] === undefined){
          return defaultValue;
        }
        object = object[key];
      } 
      return object;
    }
  }
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(__.get(object, ['a', '0', 'b', 'c']));
// => 3
 
console.log(__.get(object, 'a.b.c', 'default'));
// => 'default'