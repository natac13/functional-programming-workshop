    function reduce(arr, fn, initial) {
      if(arr.length === 0) {
        return initial;
      }
      if(arr.length === 1) {
        return fn(initial, arr[0], 0, arr);
      } else {
        var tmp = reduce(arr.slice(1), fn, initial);
        return fn(tmp, arr[0], 0, arr);
      }

    }

    module.exports = reduce
