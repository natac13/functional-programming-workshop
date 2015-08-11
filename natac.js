Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(inner_array) {
        results.push.apply(results, inner_array);
    });
    return results;
}

var x = [[1,2,3],[4,5,6],[8,9,7]];
console.log(x.concatAll());