function sumPrimes(num) {
  let counter = 2
  let sum = 0

  while (counter <= num) {
    if(isPrime(counter)) {
      sum += counter
    }
    counter += 1
  }
  return sum;
}

function isPrime(singleNumber) {
  let counter = 2
  while (counter < singleNumber) {
    if (singleNumber % counter === 0) {
      return false
    }
    counter += 1 
  }
  return true
}

sumPrimes(10);

console.log(isPrime(4))
