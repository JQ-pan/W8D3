Array.prototype.uniq = function() {
    let output = [];

    for (let i = 0; i < this.length; i++) {
        if (!output.includes(this[i])) {
            output.push(this[i]);
        }
    }

    return output;
}


Array.prototype.twoSum = function() {
    let output = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                output.push([i, j]);
            }
        }
    }

    return output;
}
