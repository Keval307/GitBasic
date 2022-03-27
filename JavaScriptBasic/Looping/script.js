//for loop -> A for loop repeats until a specified condition evaluates to false
const num = 4
console.log("Table of "+ num);

for(let i=1; i<=10; i++){
    console.log(num+" * "+i+" = "+i*i)
}

//while loop -> A while statement executes its statements as long as a specified condition evaluates to true
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log("After "+n+"th pass n : "+n+",x : "+x);
}

//do..while -> The do...while statement repeats until a specified condition evaluates to false. First statement is always executed before the condition is checked.
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//for..in -> The for...in statement iterates a specified variable over all the enumerable properties of an object.
const myCar = new Object(); //object created
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

for(x in myCar){
    console.log(x);
    for(i of x){
        console.log(i);//Ex. make->m a k e(every char in new line)
    }
}

const arr = [3, 5, 7];
arr.foo = 'hello'; 
console.log(arr);// [3, 5, 7, foo: 'hello']

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}//Array value

