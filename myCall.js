/**
 * Created with comment
 * @time: 2018/11/9 上午10:29
 */

Function.prototype.myCall = function(){
	var ctx = arguments[0];
	if(typeof ctx === "undefined"){
		ctx = window;
	}
	ctx.fun = this;
	if(arguments.length>1){
		ctx,fun(...[...arguments].slice(1));
	}else{
		ctx.fun();
	}
	delete ctx.fun;
};

var a = {
	value: 1
};
function getValue(){
	console.log(this.value);
}

getValue();
getValue.myCall(a);
