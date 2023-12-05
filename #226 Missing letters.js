function fearNotLetter(str) {
for (let i = 0; i < str.length - 1; i++) {
  let currentCharCode = str.charCodeAt(i)
  let nextCharCode = str.charCodeAt(i + 1)

  if ( nextCharCode - currentCharCode > 1) {
    let missingLetter = String.fromCharCode(currentCharCode + 1
    )
    return missingLetter
  }
}
}

fearNotLetter("abce");
