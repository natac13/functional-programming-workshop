var slice = Array.prototype.slice

function logger(namespace) {
      return function() {
        var words_arr = slice.call(arguments);
        words_arr.unshift(namespace)
        console.log.apply(null, words_arr);
    };
}

module.exports = logger


// function logger(namespace) {
//       return function() {
//         console.log.apply(console, [namespace].concat(slice.call(arguments)))
//       }
//     }
