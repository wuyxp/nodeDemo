/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/9 上午10:59
 */

const PADDING = "PADDING";
const REJECT = "REJECT";
const RESOLVE = "RESOLVE";

class MyPromise{
  constructor(callback){
    if(typeof callback !== "function"){
      throw new Error('参数必须是函数')
    }
    this.state = PADDING;
    this.value = undefined;
    this.resolveCallBacks = [];
    this.rejectCallBacks = [];
    setTimeout(() => {
      // 这里到事件的末尾再执行回调操作
      callback(this._resolve.bind(this), this._reject.bind(this))
    }, 100)
  }
  _resolve(result){
    // 状态一旦修改，就无法再次修改
    if(this.state === PADDING){
      this.state = RESOLVE;
      this.value = result;
      this.resolveCallBacks.forEach(cb => cb(result))
    }
  }
  _reject(result){
    if(this.state === PADDING){
      this.state = REJECT;
      this.value = result;
      this.rejectCallBacks.forEach(cb => cb(result))
    }
  }
  // 处理then方法，设置默认参数
  then(resolveCallback = v => v, rejectCallback = v => {throw v}){
    /**
     * then必须要返回新的promise
     * 如果then里面没有传递参数，那么则需要透传
     */
    let promise2;
    if(this.state === RESOLVE){
      promise2 = new MyPromise((resolve, reject) => {
        const x = resolveCallback(this.value);
        setTimeout(() => {
          // 这里的获取结果必须都要延迟进行，因为要等待promise的CallBack执行完毕，否则获取的当前的promise的state是不准确的
          resolutionProcedure(promise2, x, resolve, reject);
        }, 200)
      })
    } 
    else if(this.state === REJECT){
      promise2 = new MyPromise((resolve, reject) => {
        const x = rejectCallback(this.value);
        setTimeout(() => {
          resolutionProcedure(promise2, x, resolve, reject);
        }, 200)
      })
    }
    else if(this.state === PADDING){
      promise2 = new MyPromise((resolve, reject) => {
        this.resolveCallBacks.push(() => {
          const x = resolveCallback(this.value);
          setTimeout(() => {
            resolutionProcedure(promise2, x, resolve, reject);
          }, 200)
        });
        this.rejectCallBacks.push(() => {
          const x = rejectCallback(this.value);
          setTimeout(() => {
            resolutionProcedure(promise2, x, resolve, reject);
          }, 200)
        });
      });
    }
    return promise2;
  }
  // 捕获异常
  cache(cacheCallback){
    return this.then(undefined, cacheCallback)
  }
}
MyPromise.resolve = function(){
  return new MyPromise((resolve, reject) => {
    resolve(param)
  })
};
MyPromise.reject = function(param){
  return new MyPromise((resolve, reject) => {
    reject(param)
  })
};

/**
 * 这里主要处理几个规则
 * 1. 如果计算结果是MyPromise类型
 * 3. 剩下的则直接返回resolve(x)
 * @param {新生成的Promise实例} promise2 
 * @param {上个函数对应执行结果} x 
 * @param {新生成Promise实例的resolve方法} resolve 
 * @param {新生成Promise实例的reject方法} reject 
 */
function resolutionProcedure(promise2, x, resolve, reject){
	if(promise2 === x){
    	return reject(new Error("互相引用错误"));
	}
	if(x instanceof MyPromise){
		if(x.state === PADDING){
			x.then((value) => {
				resolutionProcedure(promise2, value, resolve, reject);
			}, reject);
		}else{
			x.then(resolve, reject);
    }
	}else{
		resolve(x);
	}
}

new MyPromise(function(resolve, reject){
	setTimeout(function(){
		resolve(10);
	}, 1000);
}).then(function(result){
	console.log(result);
	return MyPromise.reject("cache");
}).cache(function(err){
  console.log(err);
  return new MyPromise(resolve => {
    setTimeout(function(){
      resolve('resolve')
    }, 2000)
  })
}).then(function(success){
  console.log(success)
});




