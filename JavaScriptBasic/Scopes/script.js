// JavaScript had only Global Scope and Function Scope which is var keyword.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

//Function Scope
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.

function insideVar(){
    var a = 10;
    console.log(a);
}

function insideLet(){
    let b = 20;
    console.log(b);
}

function insideConst(){
    const c = 30;
    console.log(c);
}

insideVar();
insideLet();
insideConst();

//console.log(a+" "+b+" "+c) <= outside scope


// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
var x = 40;
let y = 20;
const z = 90;

function globalScope(){
    console.log(x+" "+y+" "+z)
}
 
globalScope();

//Function Scope
//A variable defined exclusively within the function cannot be accessed from outside the function or within other functions.
//Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.


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