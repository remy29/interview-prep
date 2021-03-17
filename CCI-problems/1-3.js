function urlify(n,s){
  let returnString = ""
  for (let i = 0; i < n; i ++) {

    if (s[i] === " ") {
      returnString += "%20";
    }
    
    else if (s[i] !== undefined) {
      returnString += s[i]
    }

  }

  return returnString;
}

console.log(urlify(11, "the red fox    "))