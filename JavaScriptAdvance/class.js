//A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

/* ES5  */
//By constructor/prototype pattern

// function Person(name){
//  this.name = name
// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// var ram = new Person('Ram Shyam');
// console.log(ram.getName());

// /*
//   First, create the Person as a constructor function that has a property name called name. 
//   The getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.

// Then, create a new instance of the Person type using the new operator. 
// The ram object, hence, is an instance of the Person and Object through prototypal inheritance.

// */

// //To verify the fact that classes are special functions
// console.log(typeof Person); // function
// console.log(ram instanceof Person); // true
// console.log(ram instanceof Object); // true

/* ES6 */
// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     getName(){
//         return this.name;
//     }
// }

// let ram = new Person('Ram Raj');
// let call = ram.getName();
// console.log(call);

// /* 
//   In the Person class, the constructor() is where you can initialize the properties of an instance. 
//   JavaScript automatically calls the constructor() method when you instantiate an object of the class. 
// */

// //To verify the fact that classes are special functions
// console.log(typeof Person); // function
// console.log(ram instanceof Person); // true
// console.log(ram instanceof Object); // true

// Use JavaScript class keyword declares a new class.
// A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.