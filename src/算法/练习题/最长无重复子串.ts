//line=readline()
//print(line)
// console.log('Hello World!');

/**
 * 使用动态规划 解决最长无重复子串（可以不连续）
 * 1. 定义状态方程 dp(i) 最长子串为 s
 * 2. 定义状态方程规则 dp(i+1) = str[i] ∈ s ? s : s + str[i]
 * 3. 定义初始值 dp(1) = 1
 * @param {*} str 
 */
function findLongestOnce1(str: string) {
  if (!str) return 0
  let dp : string[] = [str[0]]
  for (let i = 1; i < str.length; i++) {
    const a = str[i];
    if (dp[i - 1].includes(a)) {
      dp[i] = dp[i-1]
    } else {
      dp[i] = dp[i-1] + a
    }
  }
  return dp[str.length-1]
}
 
// console.log(findLongestOnce1('abcda'));
// console.log(findLongestOnce1("pwwkew"));



/**
 * 使用动态规划 解决最长无重复连续子串（必须连续）
 * 1. 定义状态方程 dp(i) 最长连续子串为 s
 * 2. 定义状态方程规则 dp(i+1) = 遍历 dp(1) 内部的长度是否有重复
 * 3. 定义初始值 dp(1) = 1
 * @param {*} str 
 */
 function findLongestOnce2(str: string) {
  if (!str) return 0
  let dp : string[] = [str[0]]
  let maxStr = dp[0]
  for (let i = 1; i < str.length; i++) {
    dp[i] = str[i]
    let len = dp[i-1].length
    let tmp = 0
    do {
      tmp++
      if (str[i] !== str[i - tmp]) {
        dp[i] = str[i-tmp] + dp[i]
      } else {
        
        break;
      }
    } while (tmp < len)
    if (dp[i].length > maxStr.length) {
      maxStr = dp[i]
    }
  }
  return maxStr
}
 
console.log(findLongestOnce2('abcda'));
console.log(findLongestOnce2("pwwkewsws"));