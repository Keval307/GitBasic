//default parameter
let multiply = (a,b=6) => console.log(a*b);

multiply(); //NaN
multiply(2); //12
multiply(2,5); //10
multiply('2',5); //10
multiply('2','5'); //10
multiply( null ,5); //0
multiply('',5); //0

function test(num = 1) {
  console.log(num, typeof num)
}

test()           //1 'number' (num is set to 1)
test(undefined)  //1 'number' (num is set to 1 too)

// test with other falsy values:
test('')         // 'string' (num is set to '')
test(null)       //null 'object' (num is set to null)


//JavaScript engine evaluates the default arguments at the time call the function
function append(value, array = []) {
  array.push(value)
  return array
}

console.log(append(1));  // [1]
console.log(append(2));  // [2], not [1, 2]

//The parameter list seems to have its own scope. If you reference the parameter that has not been initialized yet, will get an error. 
function subtract(x=y, y=1){
  return x-y;
}
console.log(`${subtract()}`); //Cannot access 'y' before initialization

function fillArray([x=1,y=2] = [] ){
  return x+y;
}

console.log(fillArray()); //3
console.log(fillArray([])); //3
console.log(fillArray([2])); //4
console.log(fillArray([2,3])); //5

// Works the same for objects:
function preFilledObject({z = 3} = {}) {
  return z;
}

console.log(preFilledObject());          // 3
console.log(preFilledObject({}));        // 3
console.log(preFilledObject({ z: 2 }));  // 2
