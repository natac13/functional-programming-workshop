function repeat(operation, num) {
      // modify this so it can be interrupted
      if (num <= 0) return
      setTimeout(function() {
        operation();
        repeat(operation, --num);
      }, 0);


      // return repeat(operation, --num)
    }

    module.exports = repeat