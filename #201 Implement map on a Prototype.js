Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      newArray[i] = callback(this[i], i, this);
    }
  }
  // Only change code above this line
  return newArray;
};
