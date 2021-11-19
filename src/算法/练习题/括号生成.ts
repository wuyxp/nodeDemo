function generateParenthesis(n: number): string[] {
  if (n === 0) return []

  const reuslt: string[] = []
  const r: string[] = []

  dfs(0, r, reuslt, n, n)

  return reuslt
};
function dfs(ind: number, r: string[], result: string[], lNum: number, rNum:number) {
    console.log(lNum, rNum)
    if (lNum <= 0 && rNum <= 0) {
        result.push(r.join(''))
        return
    }
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            if (lNum > 0) {
                r[ind] = '('
                dfs(ind+1, r, result, lNum - 1, rNum)
            }
        } else {
            if (rNum > lNum) {
                r[ind] = ')'
                dfs(ind+1, r, result, lNum, rNum - 1)
            }
        }
    }
}

console.log(generateParenthesis(3))
