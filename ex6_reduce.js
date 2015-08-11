//Given an Array of strings, use Array#reduce to create an object that contains
//the number of times each string occured in the array. Return the object
//directly (no need to console.log)

function countWords(inputWords) {
      return inputWords.reduce(function(obj, curr_word, index) {
        var obj_count = obj || {};
        if(obj_count.hasOwnProperty(curr_word)) {
            obj_count[curr_word]++
            return obj_count;
        } else {
            obj_count[curr_word] = 1;
            return obj_count;
        }
      }, {})
    }

module.exports = countWords
