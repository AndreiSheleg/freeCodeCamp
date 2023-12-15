function addTogether() {
  let [arg1, arg2] = arguments

  function missingArgument (arg2) {
    return addTogether(arg1, arg2)
  }

  if (typeof arg1 === 'number') {
     if (typeof arg2 === 'number') {
    return arg1 + arg2
  }
  if (arguments.length === 1) {
   return missingArgument
  }
 }
}

addTogether(2,3);
