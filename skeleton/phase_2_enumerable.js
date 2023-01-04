Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i])
    }
}

Array.prototype.myMap = function() {
    let output = this.slice()
    return function(callback) {
        output.myEach(callback)
        return output
    }
}

Array.prototype.myReduce = function(callback, initialValue=null) {
  if (initialValue === null) {
    initialValue = this.shift();
  }

  this.myEach((el) => initialValue = callback(initialValue, el))

  return initialValue;
}

