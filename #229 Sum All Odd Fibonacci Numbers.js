function sumFibs(num) {
  let prevNumber = 0
  let currentNumber = 1
  let sum = 0

  while (currentNumber <= num) {
if (currentNumber % 2 !== 0) {
  sum += currentNumber
}

let nextNumber = prevNumber + currentNumber

prevNumber = currentNumber
currentNumber = nextNumber

  }
  return sum;
}

sumFibs(4);
console.log(sumFibs(4))
