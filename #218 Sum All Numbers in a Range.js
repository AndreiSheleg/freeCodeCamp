function sumAll(arr) {
let minimumArr = Math.min(arr[0], arr[1])
let maximumArr = Math.max(arr[0], arr[1])
let result = 0
for (let i = minimumArr; i <= maximumArr; i++) {
  result += i
}

return result
}

sumAll([1, 4]);
