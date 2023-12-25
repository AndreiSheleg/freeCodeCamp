function palindrome(str) {
let filtredStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
let reversed = [...filtredStr].reverse().join('')

  return filtredStr == reversed
}

palindrome("eye");
