function getIndexToIns(arr, num) {
  let sortedArr = [...arr, num].sort( (a, b) => a - b)
  console.log(sortedArr)
  return sortedArr.indexOf(num)
}

getIndexToIns([40, 60], 50);
