function bouncer(arr) {
  let result = arr.filter(el => {
    if (Boolean(el)){
      return el
    }
  })
  return result
}

bouncer([7, "ate", "", false, 9]);
