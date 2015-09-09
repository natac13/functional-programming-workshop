var slice = Array.prototype.slice

    function logger(namespace) {
      return function() {
        // console.log(arguments);
        var x = Array.prototype.slice.call(arguments, 0);
        // console.log(x);
        return console.log(namespace + ' ' + x.join(' '))
      }
    }

    module.exports = logger


// function logger(namespace) {
//       return function() {
//         // console.log(arguments);
//         var x = Array.prototype.slice.call(arguments, 0);
//         // console.log(x);
//         console.log('test', 'test2', 'test3');
//         return console.log.apply(console, [namespace].concat(x))
//       }
//
//
