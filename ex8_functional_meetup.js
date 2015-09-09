    function duckCount() {
      var objArray = Array.prototype.slice.call(arguments, 0);
      // console.log(objArray);
      // var x = Object.create(null);
      // x.test = 'test';
      // var y = Object.create(Object);
      // y.test2 = 'test2';
      // console.log('fist' +x.hasOwnProperty('test'));
      // console.log('sec' + y.hasOwnProperty('test2'));
      return objArray.filter(function(obj) {
        console.log('test');
        return Object.hasOwnProperty.call(obj, 'quack');
      }).length;
    }

    module.exports = duckCount
