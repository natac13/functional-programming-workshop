    function repeat(operation, num) {
      // Modify this so it doesn't cause a stack overflow!
      if (num <= 0) return
      operation()
      return trampoline(function() {
        return repeat(operation, --num);
      });
    }

    function trampoline(fn) {
      setTimeout(fn, 0);
    }

    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
      return repeat(operation, num)
    }
