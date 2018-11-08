/* eslint-disable */
console.log("A");
var promise = new Promise(( resolve, reject) => {
	console.log("C");
	setTimeout(() => {
		console.log("D");
		resolve();
		reject();
		resolve();
	}, 10);
	setTimeout(() => {
		console.log("H");
	}); 
});
promise.then(() => console.log("E"));
promise.then(() => console.log("F"));
promise.catch(() => console.log("G"));

console.log("B");

console.log("-----------");

new Promise(( resolve, reject) => {
	return "abc";
}).then(res => console.log(res)).catch(res => {console.log(res);});


console.log("-----可取消的promise-----");

function MyPromise(promise){
	let cencel = false;
	let newPromise = new Promise((resolve, reject) => {
		promise.then(val => {
			cencel ? reject({cencel: true}): resolve(val);
		});
		promise.catch(err => {
			cencel ? reject({cencel: true}): reject(err);
		});
	});
	return {
		promise: newPromise,
		cancel(){
			cencel=true;
		}
	};
}