const repeat1 = (str = '', times = 1) => {
  let res = str;

  while (--times) {
    res += str;
  }

  return res;
}
const repeat2 = (str = '', times = 1) => {
  let result = '';

  if (!str || times < 1) {
      return result;
  }

  do {
      if (times % 2) {
          result += str;
      }

      times = Math.floor(times / 2);

      if (times) {
          str += str;
      }
  } while (times)

  return result;
}

const funRunTime = (fun, ...argu) => {
  console.time(fun.name)
  const result = fun.apply(this, argu)
  console.timeEnd(fun.name)
}

const createRuns = (...funs) => time => {
  console.log(`-----start--time=${time}---`)
  funs.forEach(fun => funRunTime(fun,'0', time))
  console.log('-----end----- \n')
}

const runs = createRuns(repeat1, repeat2)

runs(10)
runs(100)
runs(1000)
runs(10000)
runs(100000)
runs(1000000)
runs(10000000)
