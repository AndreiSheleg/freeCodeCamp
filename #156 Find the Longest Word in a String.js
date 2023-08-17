function findLongestWordLength(str) {
  let arrOfWords = str.split(' ')
  let longestWord = ''

for (let i = 0; i < arrOfWords.length; i++) {
  if(arrOfWords[i].length > longestWord.length) {
    longestWord = arrOfWords[i]
  }
}
return longestWord.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
