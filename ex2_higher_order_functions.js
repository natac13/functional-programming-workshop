function repeat(operation, num) {
    return num === 1 ? operation() : repeat(operation, num-1);
}

// Do not remove the line below
module.exports = repeat