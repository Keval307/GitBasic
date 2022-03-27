function logMessage(){
    console.log("This is a Function Declaration");
}

logMessage();
logMessage();

let fun = function(){
    console.log("This is Function Expression")
}

fun();

function passMessage(message1, message2){
 console.log(message1);
 console.log(message2);
}

passMessage("Hello","Tom");

function passWithOneArg(message1, message2){
    console.log(message1);
    console.log(message2);
   }
   
passWithOneArg("Hello");

function returnSquareValue(value){
    return value*value;
}

let square = returnSquareValue(8);
console.log(square);

function noReturnValue(value){
    //return value*value;
}

let noValue = noReturnValue(5);
console.log("Without Return statement Value : "+noValue);

let key = 24;

function outerFun(value){
    let innerFun = function(){
        let key = 30;
        console.log('key value in inner function : '+key)
        return key;
    }
    let code = value * innerFun();
    console.log('key value in outer function : '+key)
    return code;
}

console.log(outerFun(2))
//console.log(code); <= var outside thye function scope

// sum(1, 2)

// const sum = function (a, b) {
//   return a + b
// }

//Error : Uncaught ReferenceError: Cannot access 'sum' before initialization(1, 2)
