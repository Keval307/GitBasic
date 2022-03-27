document.getElementById('root').innerHTML = "Hello World!!"
let fname = "Hello", value=45, bool=true, x=null, y=undefined;
console.log(fname+" "+ value+" "+ bool+" "+x+" "+y);

// let 99Num = 99;
// console.log(99Num);

// let price is = 199;
// console.log(price is);

let showMe; //not always necessary to initialize value, we can add whenever to use..
console.log("showMe Value: "+showMe);

fname = null;
console.log("Now fname Value: "+fname);

//let fname = "Hii"; <= We can't Redefine variable but reassign as above mention

//const name; <= Variable should be assigned
const name = "Simform";
//const name = "Solutions"; <= Can't changed value
console.log(name);

var a;
/* var keyword variable's scope is global
   and we can reassigned value and also redefined variable */
var b = 10;
console.log("Before Redefinede: "+b)
var b = 20;
console.log("After Redefinede: "+b)

