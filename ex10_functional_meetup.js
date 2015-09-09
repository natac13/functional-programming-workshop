module.exports = function logger(namespace) {
      return function() {
        // console.log(arguments);
        var x = Array.prototype.slice.call(arguments, 0);
        // console.log(x);
        // console.log('test', 'test2', 'test3');
        var y = console.log.bind(undefined, namespace);
        return y.apply(console, x);
      }
    }