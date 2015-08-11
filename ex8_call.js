function duckCount() {
      return Array.prototype.slice.call(arguments).
        reduce(function(count, current_argument, index) {
            var total = count || 0;
            return Object.hasOwnProperty.
                call(current_argument, "quack") ? total+1 : total;
        }, 0);
    }

module.exports = duckCount