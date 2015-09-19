
function getDependencies(tree, solution) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  var solution = solution || [];
  var deps = tree.dependencies || {};
  if(tree.dependencies === undefined) {
    return [];
  }
    Object.keys(deps).forEach(function(key) {
        var str = key + "@" + deps[key].version;
        if(solution.indexOf(str) == -1) {
            solution.push(key + "@" + deps[key].version);
        }
        getDependencies(deps[key], solution);
    });
    return solution.sort();
}

module.exports = getDependencies

// var loremIpsum = {
//      "name": "lorem-ipsum",
//      "version": "0.1.1",
//      "dependencies": {
//        "optimist": {
//          "version": "0.3.7",
//          "dependencies": {
//            "wordwrap": {
//              "version": "0.0.2"
//            }
//          }
//        },
//        "inflection": {
//          "version": "1.2.6"
//        }
//      }
//    }
