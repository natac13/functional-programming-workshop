function arrayMap(arr, fn) {
      return arr.reduce(function(prev, curr, index, arr) {
        return Array.prototype.concat.call(prev, [fn(curr)]);
      }, []);
    };


    console.log(arrayMap([[1],[2],[3],[4]], function(x) { return x+3; }));