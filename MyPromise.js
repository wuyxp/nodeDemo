/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/9 上午10:59
 */

var padding = "PADDING";
var reject = "REJECT";
var resolve = "RESOLVE";

function MyPromise(callback){
	if(typeof callback !== "function"){
		throw new Error("回调必须传");
	}
	var self = this;
	self.state = padding;
	self.value = undefined;
	self.resolveCallBacks = [];
	self.rejectCallBacks = [];

	self.resolve = function(result){

		setTimeout(function(){
			if(self.state === padding){
				self.state = resolve;
				self.value = result;
				self.resolveCallBacks.forEach(function(cb){
					cb(result);
				});
			}
		},0);
	};
	self.reject = function(error){
		setTimeout(function(){
			if(self.state === padding){
				self.state = reject;
				self.value = error;
				self.rejectCallBacks.forEach(function(cb){
					cb(error);
				});
			}
		},0);
	};
	callback(self.resolve, self.reject);
}
MyPromise.resolve = function(){

};
MyPromise.reject = function(){

};
MyPromise.prototype.then = function(resolveCallback, rejectCallback){
	// then 必须要返回一个新的promise
	// 如果类型不是函数，那么需要忽略，进行透传
	// MyPromise.resolve(3).then().then(value => console.log(value))
	var self = this;

	resolveCallback = typeof resolveCallback === "function" ? resolveCallback : v => v;
	rejectCallback = typeof rejectCallback === "function" ? rejectCallback : v => {throw v;};
	var promise2;
	if(self.state === resolve){
		promise2 = new MyPromise(function(resolve, reject){
			setTimeout(function(){
				var x = resolveCallback(self.value);
				resolutionProcedure(promise2, x, resolve, reject);
			});
		});
		return promise2;
	}
	if(self.state === reject){
	    promise2 = new MyPromise(function(resolve, reject){
	    	setTimeout(function(){
	    		var x = rejectCallback(self.value);
	    		resolutionProcedure(promise2, x, resolve, reject);
			});
		});
		return promise2;
	}
	if(self.state === padding){
		promise2 = new MyPromise(function(resolve, reject){
			self.resolveCallBacks.push(function(){
				var x = resolveCallback(self.value);
				resolutionProcedure(promise2, x, resolve, reject);
			});
			self.rejectCallBacks.push(function(){
				var x = rejectCallback(self.value);
				resolutionProcedure(promise2, x, resolve, reject);
			});
		});
		return promise2;
	}
};
MyPromise.prototype.cache = function(cacheCallback){
	this.then(undefined, cacheCallback);
};
function resolutionProcedure(promise2, x, resolve, reject){
	if(promise2 === x){
    	return reject(new Error("互相引用错误"));
	}
	if(x instanceof MyPromise){
		if(x.state === padding){
			x.then(function(value){
				resolutionProcedure(promise2, value, resolve, reject);
			}, reject);
		}else{
			x.then(resolve, reject);
		}
		return;
	}else if(x !== null && typeof x === "object" || typeof x === "function"){
		var then = x.then;
		if(typeof then === "function"){
			self.call(x, res => {
				resolutionProcedure(promise2, res, resolve, reject);
			}, rej => {
				reject(rej);
			});
		}else{
			resolve(x);
		}
	}else{
		resolve(x);
	}


}




new MyPromise(function(resolve, reject){
	setTimeout(function(){
		resolve(10);
	}, 10);
}).then(function(result){
	console.log(result);
	return MyPromise.reject("cache");
}).cache(function(err){
	console.log(err);
});