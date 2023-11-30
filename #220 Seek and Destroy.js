function destroyer(arr,...args) {
  let newArr = arr.filter(el => !args.includes(el))
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
