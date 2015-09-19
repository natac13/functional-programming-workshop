function curryN(fn, n) {

  var args = n || fn.length;
  return function() {
    return fn.call(arguments)
}
}

module.exports = curryN
