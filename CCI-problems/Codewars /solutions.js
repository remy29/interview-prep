function anagrams(word, words) {
  const resultArr = [];
  for (const word2 of words) {
    if ([...word2].sort().toString() === [...word].sort().toString()) {
      resultArr.push(word2);
    }
  }
  return resultArr;
}

const uniqueInOrder = function (iterable) {
  console.log(iterable); 
  let listOfUniqueChars = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      listOfUniqueChars.push(iterable[i])
    }
  }
  console.log(listOfUniqueChars);
  return listOfUniqueChars;
}

var moveZeros = function (arr) {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
    }
    else {
      newArr.push(arr[i])
    }
  }
  for (j = 0; j < counter; j++) {
      newArr.push(0);
    }
  return newArr;
}

function findUniq(arr) {
  let unique;
  let notUnique; 
  for (let i = 0; i < arr.length; i++) {
    if (unique === undefined) {
      unique = arr[i];
      notUnique = arr[i + 1]
    }
    if (arr[i] !== unique && arr[i + 1] === unique) {
      notUnique = unique;
      unique = arr[i];
    }
    else if (i === arr.length - 1) {
      if (arr[i] !== notUnique) {
        unique = arr[i]
      }
    }
  }
  return unique;
}

function findShort(s){
  console.log(s)
  let currentShortest;
  let current = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      current += s[i];
    }
    if (s[i] === " " || i === s.length - 1) {
      if (currentShortest === undefined || current.length < currentShortest.length) {
        currentShortest = current;
      }  
       current = "";
    }
  }
  console.log(currentShortest)
  return currentShortest.length
}

var isSquare = function(n){
  const squareRoot = Math.sqrt(n);
  if (squareRoot % 1 === 0 && squareRoot * squareRoot === n) {
    return true;
  }
  if (n === 0) {
    return true;
  }
  return false; 
}

function isPangram(string){
  let counter = 0;
  let occured = [];
  const ints = ["0", "1", '2' , '3', '4', '5', '6', '7', '8' , '9', ' ', '.', ',']
  for (const char of string.toLowerCase()) {
    if (!ints.includes(char) && !occured.includes(char)) {
      occured.push(char);
      counter ++;
    }
  }
  if (counter === 26) {
    return true
  }
  return false
}

function openOrSenior(data){
  const resultArr = []
  for (const member of data) {
    if (member[0] >= 55 && member[1] > 7) {
      resultArr.push("Senior")
    }
    else {
      resultArr.push("Open")
    }
  }
  return resultArr;
}

function isIsogram(str){
  let occured = []
  const nrlizStr = str.toLowerCase()
  for (const char of nrlizStr) {
    if (occured.includes(char)) {
      console.log(char)
      return false;
    }
    occured.push(char)
  }
    return true;
}

