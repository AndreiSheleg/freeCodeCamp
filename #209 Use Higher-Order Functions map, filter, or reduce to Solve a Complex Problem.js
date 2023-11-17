const squareList = arr => {
  // Only change code below this line
  const arrIntegersSauared = arr
  .filter(el => (el > 0 &&  Number.isInteger(el) ) ? el : false)
  .map(el => el * el)

  return arrIntegersSauared
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
