Array.prototype.bubbleSort = function() {
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {

                [this[i], this[i + 1]] = [this[i + 1], this[i]]

                sorted = false
            }
        }
        if (sorted) {
            return this
        }
    }
    return false
}


String.prototype.substrings = function() {
    let output = []

    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j <= this.length; j++) {
            output.push(this.slice(i, j))
        }

    }

    return output;
}

// mlkz.substring => ['m', 'ml', 'mlk', 'mlkz', 'lkz' ']
// 'foo'.substring => ['f', 'fo', 'foo', 'oo', 'o']
                    //  ['', 'f', 'fo', '', 'o', '']
