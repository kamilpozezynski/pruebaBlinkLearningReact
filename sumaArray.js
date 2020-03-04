var lista1 = [1, 4, 3, 0];
var lista2 = [1, 2, [5, 8], 4];
var lista3 = [0, [6, 2], null, 7, 1];
var lista4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

///////////////////////////////////////////
/* Version 1 is not supported by internet explorer
   Version 2 is supported by internet explorer */
///////////////////////////////////////////

// Start of version 1

/**
 * Function that adds the numbers inside of an array independently of it´s deepths.
 * Big O(N).
 * No support for internet explorer :-( ! XD
 * @param {*} list -> type Array, might include any data type.
 */
const addArray = list => {
  let result = 0;
  list.flat(Infinity).map(listElement => {
    if (isNaN(listElement)) {
      console.log("Not a number");
    } else {
      result += listElement;
    }
  });
  return result;
};

// Test
console.log(addArray(lista1));
console.log(addArray(lista2));
console.log(addArray(lista3));
console.log(addArray(lista4));

// End Version 1

// Start version 2

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
const flatten = input => {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
};

/**
 * Supported by Internet Explorer.
 * @param {*} list -> type Array, might include any data type.
 */
const addArray2 = list => {
  let result = 0;
  flatten(list).map(listElement => {
    if (isNaN(listElement)) {
      console.log("Not a number");
    } else {
      result += listElement;
    }
  });
  return result;
};

// Test
console.log(addArray2(lista1));
console.log(addArray2(lista2));
console.log(addArray2(lista3));
console.log(addArray2(lista4));

// End of version 2