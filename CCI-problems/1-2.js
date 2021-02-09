function checkPermutation(a,b){
  for (const letter of b) {
    if (!a.includes(letter) || a.length !== b.length) {
      return "NO"
    }
  }
  for (const letter of a) {
    if (!b.includes(letter) || a.length !== b.length) {
      return "NO"
    }
  }
  return "YES"
}