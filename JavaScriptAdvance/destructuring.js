//Destructuring Assignment
//Array
const x = [1,2,3,4,5,6,7,8,9,10]

let [a,b,,c,...z] = x; //4 is ignored
console.log(a); //1
console.log(b); //2
console.log(c); //4
console.log(z); //[5, 6, 7, 8, 9, 10]

//with default params
var p,q;

[p=5, q=7] = [1];
console.log(p); // 1
console.log(q); // 7

//swapping value
let r = 1;
let s = 3;

[r, s] = [s, r];
console.log(r); // 3
console.log(s); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

function f() {
  return [1, 2];
}

let [k, l] = f();
console.log(k); // 1
console.log(l); // 2

//Object
const {name : userName, age : userAge} = {name: 'John', age: 25}; //object value assign to new variable
console.log(userName); //John
console.log(userAge); //25

const user = {
  john : {
    age : 25,
    email : 'john@email.com'
  }
}

function yourAge({john : {age}}){
  return age;
}
console.log(`age is ${yourAge(user)} year`);//age is 25 year

const {john : {age , email}} = user;

console.log(age); //25
console.log(email); //john@email.com


const {a: aa = 10, b: bb = 5} = {a: 3}; //Assigning to new variables names and providing default values
//If we write {aa: 3} it will take default value, not value 3

console.log(aa); // 3
console.log(bb); // 5

//with rest parameter
let {t, o, ...rest} = {t: 10, o: 20, c: 30, d: 40}
console.log(t); // 10
console.log(o); // 20
console.log(rest); // { c: 30, d: 40 }

//Combined Array and Object Destructuring
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, {id, name }] = props;

console.log(`${id} : ${name}`); // 3 : FizzBuzz