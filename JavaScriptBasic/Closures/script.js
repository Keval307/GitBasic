//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// function grandfather(){
//     var name = 'Hamad';
//     function parent(){
//         function child(){
//             var name = 'Coding';
//             return name;
//         }
//     }
// }
// console.log(grandfather());


// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       alert(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

//   function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

  function x(){
    var a =7;
    function y(){
      console.log(a);
    }
    a=100 //adding line
    return y;
  }

  var z = x();
  console.log(z);
  z(); //7 //after adding -> 100

  function grandfather() {
    const name = "Hammad";
    function parent() {
     function child() {
     let name = "Coding";
      return name;
     }
     return child();
    }
    return parent();
    //return name;
    }
  
    console.log(grandfather());
  