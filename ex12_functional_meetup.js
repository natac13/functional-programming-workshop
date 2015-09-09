function Spy(target, method) {
  // SOLUTION GOES HERE
  var c = {
    count: 0
}
  var oldMethod = target[method];

  target[method] = function() {

    c.count += 1;
    var x = oldMethod.apply(target, arguments);
    // console.log('coutn ' + count);
    return x;
  }
  return c;

}

module.exports = Spy