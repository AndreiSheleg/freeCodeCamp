function steamrollArray(arr, flatArray = []) {
for (let i = 0; i < arr.length; i++) {
  if( Array.isArray(arr[i]) ) {
flatArray = steamrollArray(arr[i], flatArray)
  } else {
    flatArray.push(arr[i])
  }
}


  return flatArray
}

steamrollArray([1, [2], [3, [[4]]]]);
