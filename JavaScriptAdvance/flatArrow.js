//Arrow Function

let logMessage = () => console.log("This is a Function Declaration");
logMessage();



let passMessage = (message1, message2) => {
 console.log(message1);
 console.log(message2);
}

passMessage("Hello","Tom");

let passWithOneArg = (message1, message2) => {
    console.log(message1);
    console.log(message2);
   }
   
passWithOneArg("Hello");

let returnSquareValue = (value) => value*value;

let square = returnSquareValue(8);
console.log(square);

// let noValue = noReturnValue(5);
// console.log("Without Return statement Value : "+noValue);

// let noReturnValue = (value) => value*value;
//Error : Uncaught ReferenceError: Cannot access 'noReturnValue' before initialization

// const printNumbers = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop() {
//       this.numbers.forEach(function (number) {
//         console.log(this.phrase, number)
//       })
//     },
//   }

//   printNumbers.loop()
// Output
// undefined 1
// undefined 2
// undefined 3
// undefined 4

// const printNumbers = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop() {
//       // Bind the `this` from printNumbers to the inner forEach function
//       this.numbers.forEach(
//         function (number) {
//           console.log(this.phrase, number)
//         }.bind(this),
//       )
//     },
//   }
  
//   printNumbers.loop();

//The current value is: 1
//The current value is: 2
//The current value is: 3
//The current value is: 4

const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => 
        console.log(this.phrase, number))
    }
  }
  
  printNumbers.loop();

//The current value is: 1
//The current value is: 2
//The current value is: 3
//The current value is: 4



























