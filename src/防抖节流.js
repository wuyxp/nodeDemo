function debounce(fun, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(null, arguments)
    }, delay)
  }
}

function throlle(fun, delay) {
  let timer = null
  return function () {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        fun.apply(null, arguments)
        timer = null
      }, delay)
    }
  }
}

function log() {
  console.log('111')
}

const deLog = debounce(log, 2000)