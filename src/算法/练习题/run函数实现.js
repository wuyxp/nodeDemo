var fn1 = function (a, cb) {
  setTimeout(() => {
      return cb(a + 2)
  }, 3000)
}

var fn2 = function (a, cb) {
  setTimeout(() => {
      return cb(a + 3)
  }, 2000)
}

var fn3 = function (a, cb) {
  setTimeout(() => {
      return cb(a * 2)
  }, 1000)
}

var fnArr = [fn1, fn2, fn3];



run(1, fnArr, function (res) {

  console.log(res, '===') // 这里会打印出12。// 12 = (1+2+3)*2
})


function run (defaultValue, handles, callback) {
  if (handles.length) {
    handles[0](defaultValue, (value) => {
      run(value, handles.slice(1), callback)
    })
  } else {
    callback(defaultValue)
  }
}