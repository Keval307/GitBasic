// JavaScript spread operator that spreads out elements of an iterable object.
// The spread operator can be used to clone an iterable object or merge iterable objects into one.

const odd = [1,3,5];
const combine = [2,4,6, ...odd];
const num = [2, ...odd, 4, 6]

console.log(combine); //[ 2, 4, 6, 1, 3, 5 ]
console.log(num); //[ 2, 1, 3, 5, 4, 6 ]

/* Differences:

The spread operator (...) unpacks the elements of an iterable object.
The rest parameter (...) packs the elements into an array.

The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere
*/


//concate two array
const alphabet = ['a','b','c'];
const alphanum = [...alphabet, ...num];
console.log(alphanum); //'a', 'b', 'c', 2, 1, 3, 5, 4, 6]

//copying array
const copyOdd = [...odd];

//spread Operator on string
let char = ['A', ...'BC', 'D']
console.log(char);

