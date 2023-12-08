function convertHTML(str) {
  let htmlPairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }
  
  let changedStr = str.split('')
                    .map(el => htmlPairs[el] || el)
                    .join('')

  return changedStr
}

convertHTML("Dolce & Gabbana");

console.log(convertHTML("Dolce & Gabbana"))
