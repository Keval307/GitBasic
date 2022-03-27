//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

/*
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
 */

//var n = 'Hi'; //We can't write this throe error
(function () {
  var aName = "Hello";
  console.log(`Author Name is : ${aName}`);
})(); //Author Name is : Hello

((name) => console.log(`This is ${name}`))("javascript"); //With Arrow function
//Output : This is javascript

//Avoid polluting the global namespace

//console.log(aName); //ReferenceError: aName is not defined
