function pairElement(str) {
 let dnaPairs = {
   A: 'T',
   T: 'A',
   C: 'G',
   G: 'C'
 }

 let dnaArray = str.split('')

 let pairedDNA = dnaArray.map(el => [el, dnaPairs[el] ])

 return pairedDNA
}

pairElement("GCG");
console.log(pairElement("GCG")) // returns [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
