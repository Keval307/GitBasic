let a = []; //Creating array
a[0] = 'How'; //Assigning value
console.log(a);//['How']

let ar = new Array(2); //arg -> length of array
console.log(ar); //[empty × 2]

//Initalize of array
let arr = ['a', 'b', 'c', 'd']; 
console.log(arr);
let b = Array.of(1,2,3);
console.log(b);

//Accessing Elements of Array
console.log(arr[1]); //b
console.log(arr[24]); //undefined
console.log(a[0]); //undefined

// arr[1] = 'z'; <= Changing Element value
// console.log(arr[1]); //z

//Array Manipulation
arr.push('e','f','g');
console.log(arr);

let last = arr.pop();
console.log(arr,last);

arr.unshift("hello","World");
console.log(arr);

let first = arr.shift();
console.log(arr,first);

//slice() and splice()

//slice() create an array
let newArr = arr.slice(1,4); // two parameter first for starting index and second for last index which exclude
console.log(newArr);

let copyArr = arr.slice(); //If argument not passed it slice whole array mean while array copied
console.log(copyArr); 

//splice() insert and delete element from array
//Method take 1st arg starting index, 2nd arg no of element which deleted from array, 3rd arg element which we want to include in array
arr.splice(3, 0, 'Hello'); 
console.log(arr);

arr.splice(3, 1, 'a');//first delete item at index 3(Hello) & then add new element(splice)\
console.log(arr);

// arr.splice(3);// delete all items from index 3 -> ['World', 'a', 'b']
// console.log(arr);

//concate() 
const number = [1,2,3]; //number.concat(7,[8,9]) -> [1,2,3,7,8,9]
const letter  = ['a','b','c'];

const arrConcate = letter.concat(number,[4,[5,6]])
console.log(arrConcate); //['a', 'b', 'c', 1, 2, 3, 4, [5, 6]]

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
console.log(numbers);// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(8);
console.log(numbers);// results in [[1, 8], 2, [3]]

//indexof() - find the index of value passed on arg
console.log(arr.indexOf('b')); //2
console.log(arr.indexOf('z')); //If value not exist return -1
console.log(arr.indexOf('b','c')); //2
console.log(arr.indexOf('b',3)); //2nd arg -> from index which accept num bythat search start and till end not element it return -1 even if value exist before the from index num

//find() - find the first match with arg value
let findArray = arr.find(item => item >'c');
console.log(findArray); //d

//forEach() method executes a provided function once for each array element. 
arr.forEach(item => {console.log(item,arr.indexOf(item))});

//map() -> creates a new array by doing something with each item in array. 
const mapArray = number.map(item => item*2);
console.log(mapArray);

//filter() -> creates a new array by keeping the item that return true. 
const filterArray = number.filter(item => item>1);
console.log(filterArray);

//reduce() -> accumulate value by doing something to each item in an array.
const reduceArray = number.reduce((num,prevNum) => num+prevNum);
console.log(reduceArray);

//sort() -> sort the array, The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. 
const sortLetter = ['r','g','a','k','g'];
const sortNumber = [3,7,5,1,8,4,30,58];

sortLetter.sort();
sortNumber.sort()

console.log(sortLetter); //['a', 'g', 'g', 'k', 'r']
console.log(sortNumber); //[1, 3, 30, 4, 5, 58, 7, 8] <- not true

sortNumber.sort((a,b) => a-b); // > 0 => sort b before a, < 0 => sort a before b, === 0 => keep original order of a and b
console.log(sortNumber);//[1, 3, 4, 5, 7, 8, 30, 58]

//for descending order
sortNumber.sort((a,b) => b-a); 
console.log(sortNumber);//[58, 30, 8, 7, 5, 4, 3, 1]

//toString() -> returns a string representing the specified array and its elements. 
const toStringArray = [1, 2, 'a', '1a']; //"1,2,a,1a"
console.log(toStringArray.toString());

//join() -> method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());// "Fire,Air,Water"
console.log(elements.join(''));// "FireAirWater"
console.log(elements.join('-'));// "Fire-Air-Water"