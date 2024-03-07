function rot13(str) {

const shiftChar = char => {
  let charCode = char.charCodeAt()

  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode((charCode - 65 + 13) % 26 + 65)
  }
  return char
} 
let changedStr = [...str].map(shiftChar).join('')

return changedStr
}

rot13("SERR PBQR PNZC");
