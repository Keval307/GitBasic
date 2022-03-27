/*
  All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/

console.log(Object());
console.log(Object.prototype);
//The Object.prototype object has some useful properties and methods such as toString() and valueOf().

/* 
  # The Object.prototype also has an important property called constructor that references the Object() function.
*/
console.log(Object.prototype.constructor === Object); // true
//Means Object.prototype.constructor property references the Object function



function Person(name) {
  this.name = name;
}

console.log(Person);
console.log(Person.prototype);
/*
  Like the Object() function, the Person() function has a property called prototype that references an anonymous object. 
  And the anonymous object has the constructor property that references the Person() function.
*/

//In addition, JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]], which is known as a prototype linkage.


Person.prototype.getName = function () {
  return "Hi, I'm " + this.name + "!";
};

var ram = new Person("Ram Shyam");
console.log(ram.getName());

/*
   Internally, the JavaScript engine creates a new object named ram and links the ram object to the Person.prototype object via the prototype linkage:
*/

//The link between ram, Person.prototype, and Object.protoype is called a prototype chain.

//Here ram doesn't getName(), JS folllow prototype linkafe and finds it on Person.prototype object and got there and execute.

let s = ram.toString(); //toString not in ram and Person so it find in Object and execute.
console.log(s);
//console.log(ram.fly()); //TypeError: ram.fly is not a function
//Because it is not in ram, Person and Object

/*
  Every function has a prototype object. This prototype object references the Object.prototype object via [[prototype]] linkage or __proto__ property.
  The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.
  The Object.getPrototypeOf() method returns the prototype object of a given object. Do use the Object.getPrototypeOf() method instead of __proto__.
*/
