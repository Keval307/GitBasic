//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, before execution of the code.

/*
Note: JavaScript only hoists declarations, not the initializations.

JavaScript allocates memory for all variables and functions defined in the program before execution.
*/

/* Function Hoisting */
// getName(); //Hello Everyone !!!

// console.log(getName); 
// //Output :
// /* ƒ getName(){
//     console.log("Hello Everyone !!!");
// } */

// function getName(){
//     console.log("Hello Everyone !!!");
// }

/* Variable Hoisting */
/* However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.

Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized). 
*/

//var hoisting
// console.log(x); //undefined
// var x = 10;
// console.log(x); //10

/* If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. 
Trying to read the variable before it is initialized results in ReferenceError exception.*/
// console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
// num = 6; // Initialization
// console.log(num);//6

//let & const hoisting
/* Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. 
An exception will be thrown if a variable declared with let or const is read before it is initialized.*/
// console.log(number); // Throws ReferenceError exception as the variable value is uninitialized
// let number = 6; // Initialization

//class hoisting
/* Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. 
However the class is not initialized by default, 
so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.*/

// const p = new Rectangle(); // ReferenceError: Cannot access 'Rectangle' before initialization

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// Function and class expression hoisting
// Function expressions and class expressions are not hoisted.
  

 

  


