let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.cute = function(){
        console.log("Yes, I'm cute");
        return true
      }
    },
    singMixin: function(obj) {
      obj.sign = function(){
         console.log("Singing to an awesome tune");
      }
    }
  }
})()

console.log(typeof funModule) //returns object
