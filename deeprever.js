// 用递归的方法翻转一个字符串

const rever = (str, result = '') => {

  let rr = result;
  if(str.length === 0) {
    return rr;
  } else {
    let tep = str[str.length-1];
    rr = result + tep;
    str = str.slice(0, -1)
  }

  return rever(str, rr);
}

console.log(rever("abc"));
console.log(rever("abcdef"));
console.log(rever("1234567"));
