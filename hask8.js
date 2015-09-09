// eliminate consecetive elements of a list
//
var x = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 5, 3, 2, 2];
// [ 1, 2, 3, 4, 5, 6, 5, 3, 2 ]
var y = x.reduce(function(prev, curr, i, arr) {

    if(prev[prev.length-1] !== curr) {
        Array.prototype.push.call(prev, curr);
    }
    return prev
}, []);

console.log(y);
