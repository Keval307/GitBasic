// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }

//     static helloWorld() {
//         console.log('Hello World');
//     }
// }

// class Bird extends Animal {
//     constructor(legs, name) {
//         super(legs);
//         this.name = name;
//     }
    
//     /*
//       ES6 allows the child class and parent class to have methods with the same name. 
//       In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.

//       To call the method of the parent class in the child class, you use super.method(arguments)
//     */
//     walk() {
//         console.log('going on ');
//         super.walk();
//     }
//     fly() {
//         console.log(`${this.name} flying and walking with ${this.legs} legs`);
//     }
// }
// //If the Bird class doesn’t have a constructor, you can don’t need to do anything else
// /*
//   class Bird extends Animal {
//     fly() {
//         console.log('flying');
//     }
// }

//     ----> Equivalent to :

//     class Bird extends Animal {
//     constructor(...args) {
//         super(...args);
//     }
//     fly() {
//         console.log('flying');
//     }
// }

//   However, the child class has a constructor, it needs to call super(). For example, the following code results in an error:

//   class Bird extends Animal {
//     constructor(legs) {
//     }
//     fly() {
//         console.log('flying');
//     }
// }
// //Error : ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

// */

// let bird = new Bird(2, 'Pigeon');

// bird.walk();
// bird.fly();
// Bird.helloWorld(); //Besides the properties and methods, the child class also inherits all static properties and methods of the parent class.

// /*
//   #Inheriting from built-in types
//     JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.
// */

// /*
//   Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
//   Use super keyword to call methods of the parent class in the methods of the child class.
// */