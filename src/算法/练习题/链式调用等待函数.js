// new A().log(1).wait(2).wait(2).log(1).wait(2)
class A {

  constructor() {
    this._queue = []
    this._runtime = false
  }
  _generWait (time) {
    return () => {
      this._runtime = true
      setTimeout(() => {
        if (this._queue.length > 0) {
          const fn = this._queue.shift()
          fn()
        }
        this._runtime = false
      }, time * 1000)
    }
  }

  log (message) {
    if (!this._runtime) {
      console.log(message)
    } else {
      this._queue.push(() => {
        console.log(message)
        if (this._queue.length > 0) {
          const fn = this._queue.shift()
          fn()
        }
      })
    }
    return this
  }

  wait (time) {
    if (!this._runtime) {
      this._generWait(time)()
    } else {
      this._queue.push(this._generWait(time))
    }
    return this
  }
}

new A().log(1).wait(1).log(1.5).wait(0).wait(2).log(2).wait(5).log(3)


// function A() {
//   this.waitTime = 0;
// }

// A.prototype.log = function (time) {
//   let self = this;
//   if (this.waitTime > 0) {
//     setTimeout(() => {
//       console.log(time)
//       self.waitTime = 0;
//     }, this.waitTime * 1000)

//     // this.waitTime = 0;
//   } else {
//     console.log(time);
//   }

//   return this;
// }

// A.prototype.wait = function (time) {
//   this.waitTime += time;
//   return this;
// }

// new A().log(1).wait(2).wait(2).log(2).wait(2).log(3).wait(1).log(4);