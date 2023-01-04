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

