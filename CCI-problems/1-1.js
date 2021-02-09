function isUnique(s) {
  let alreadyOccured = [];
  let same = false;
  for (const letter of s) {
    if (alreadyOccured.includes(letter)) {
      same = true;
    }
    alreadyOccured.push(letter);
  }
  if (same) {
    return "NO";
  }
  return "YES";
}