function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

let result = arr.map(el => {
  let axis = el.avgAlt + earthRadius

  let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(axis ** 3 / GM))
  return {name: el.name, orbitalPeriod}
})

  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
