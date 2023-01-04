Array.prototype.uniq = () => {
    let output = [];
    let originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
        if (!output.includes(originalArray[i])) {
            output.push(originalArray[i]);
        }
    }
    return output
}