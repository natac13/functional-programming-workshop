function reduce(arr, fn, initial) {
      if(arr.length === 0) {
        return initial;
      } else {
        var initial = fn(initial, arr[0]);
        return reduce(arr.slice(1), fn, initial);

      }
    }

// reduce([1,2,3], function(prev, curr) {
//     return prev + curr;
// }, 0);

module.exports = reduce
