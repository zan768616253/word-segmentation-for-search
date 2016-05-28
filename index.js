'use strict';

const  _ = require('lodash');

let permute = function(array) {
  let perm = [], used = [];

  function fn(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      used.push(ch);
      if (input.length == 0) {
        perm.push(used.slice());
      }
      fn(input);
      input.splice(i, 0, ch);
      used.pop();
    }
    return perm;
  }

  return fn(array);
}

let getAllCombination = function (array, size) {
  let results = [], result, mask, i, total = Math.pow(2, array.length);

  for(mask = size; mask < total; mask++) {
    result = [];
    i = array.length - 1;
    do {
      if ((mask & (1 << i)) !== 0) {
        result.push(array[i]);
      }
    } while (i--);
    if (result.length >= size) {
      results.push(result)
    }
  }

  return results;
}

let cs = getAllCombination(['aaa', 'bbb', 'ccc'], 1);

let results = [];

_.each(cs, (c) => {
  _.each(permute(c), (p) => {
    results.push(p);
  })
});

console.log(results);