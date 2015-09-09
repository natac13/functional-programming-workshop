module.exports = function arrayMap(arr, fn) {
      return arr.reduce(function(prev, curr, index, arr) {
        return Array.prototype.concat.call(prev, [fn(curr)]);
      }, []);
    };

    // the square brackets around the fn(curr) is to offset the flatten that
    // occurs from concat()
