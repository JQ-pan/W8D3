function range(start, end) {
    // base case
    if (start === end) {
        return end
    }
    // recursive case
    return [start].concat(range(start + 1, end))
}

function sumRec(arr) {
    // base case
    if (arr.length === 0) {
        return 0
    }
    // recursive case
    return arr.shift() + sumRec(arr)
}