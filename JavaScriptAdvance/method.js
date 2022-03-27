// const number = [2, 8, 6, 9, 5, 3, 4];
// const user = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "Jeckson", age: 10 },
// ];

// /* map() -> creates a new array by doing something with each item in array. */
// //It does without mutating the original.

// const mapArray = number.map(item => {return item*2});
// console.log(`Map() : ${mapArray}`); //Map() : 4,16,12,18,10,6,8

// //const mapArForEach = number.forEach(item => item*2); <- we can't write this way because forEach can't return array
// const mapArForEach = []
// number.forEach(item => mapArForEach.push(item*2));
// console.log(`forEach() : ${mapArForEach}`); //forEach() : 4,16,12,18,10,6,8

// const userOb = user.map(item => ({[item.name] : item.age}));
// console.log(userOb); //[ { John: 34 }, { Amy: 20 }, { Jeckson: 10 } ]

// const bookBiteCollection = {
//   title: "Most Awaited Collection",
//   priority: 0,
//   book_bite: [
//     {
//       id: "8",

//       audio:
//         "https://nextbigidea-audios.s3.amazonaws.com/1636380147581-1601387106204-BB.Heath_20200823.mp3",
//     },

//     {
//       id: "11",

//       audio:
//         "https://nextbigidea-audios.s3.amazonaws.com/1587220101118-Jonah+Berger+Book+Bites.mp3",
//     },

//     {
//       id: "9",

//       audio:
//         "https://nextbigidea-audios.s3.amazonaws.com/1587219412385-David+Sax+Book+Bites.mp3",
//     },

//     {
//       id: "12",

//       audio:
//         "https://nextbigidea-audios.s3.amazonaws.com/1587220578793-Olga+Khazan+Book+Bites+v2.mp3",
//     },
//   ],
// };

// const {
//   book_bite: [{ id: id1 }, { id: id2 }],
// } = bookBiteCollection;

//const arr = book_bite.map(item => item.id);
// console.log(id1);
// console.log(id2);

// //filter() -> creates a new array by keeping the item that return true.
// const filterArray = number.filter(item => item>4);
// console.log(filterArray); //[8, 6, 9, 5]

// const adult = user.filter(item => item.age>18);
// console.log(adult);

//reduce() -> accumulate value by doing something to each item in an array.
// const reduceArray = number.reduce((num,prevNum) => num+prevNum,0); //0+2+8+6+9+5+3+4
// console.log(reduceArray); //37

// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//   return returns;
// };
// console.log(array.reduce((reducer),10)); //with Initial value

//Output
// previous: 10, current: 15, index: 0, returns: 25
// previous: 25, current: 16, index: 1, returns: 41
// previous: 41, current: 17, index: 2, returns: 58
// previous: 58, current: 18, index: 3, returns: 76
// previous: 76, current: 19, index: 4, returns: 95
// 95
// const alphaNum = [5,2,'G',9,'r',3,'s','V']

// const numSquareSum = alphaNum.filter(item => typeof item === 'number') //[ 5, 2, 9, 3 ]
//                      .map(item => item*2)  //[ 10, 4, 18, 6 ]
//                      .reduce((prev,curr) => prev+curr); //38
// console.log(numSquareSum);

// //Flatten an array of arrays
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     ( previousValue, currentValue ) => previousValue.concat(currentValue),
//     []
//   )
// console.log(flattened);

// //Sum of values in an object array
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
//     (previousValue, currentValue) => previousValue + currentValue.x, 0)

// console.log(sum) // logs 6

// //toString() -> returns a string representing the specified array and its elements.
// const toStringArray = [1, 2, 'a', '1a']; //"1,2,a,1a"
// console.log(toStringArray.toString());

// //join() -> method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());// "Fire,Air,Water"  //Bydefault take ','
// console.log(elements.join(''));// "FireAirWater"
// console.log(elements.join('-'));// "Fire-Air-Water"

// /* map() vs filter() */
// const filteredNumbersByMap = number.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });
// console.log(filteredNumbersByMap); //[2, 8, 6, undefined, undefined, undefined, undefined]

// const filteredNumbersByFilter = number.filter((num, index) => {
//     if(index < 3){
//         return num;
//     }
// });
// console.log(filteredNumbersByFilter); //[2, 8, 6]

// console.log(number.filter(item => {return item*2})); //[2, 8, 6, 9, 5, 3, 4]
// //Because everytime in return check condition and expression evalute and which is true so item print...
