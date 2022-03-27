//If we run code on node module we hav to save our both import and export file with '.mjs' extention and run in terminal...

import defaultNameChanged, /* { default as m1 a, b, add, multiply}*/ * as cal from './moduleExport.js';
//imported all bindings from the cal.js module as the cal object. In this case, all the bindings become properties of the cal object
//To rename the default export, you also use the as keyword
/*
  To import both default and non-default bindings, you use the specify a list of bindings after the import keyword with the following rules:
    The default binding must come first.
    The non-default binding must be surrounded by curly braces.
*/

const h1 = document.createElement('h1');
h1.textContent = defaultNameChanged;

document.body.appendChild(h1)

console.log(`${cal.a} + ${cal.b} : ${cal.add()} 
${cal.a} * ${cal.b} : ${cal.multiply()}`);


/*
  Note : for default import no need of "{}", otherwise it must required... 
*/

//Limitation of import and export statements
/*
  Note that you must use the import or export statement outside other statements and functions.
  if( requiredSum ) {
   export sum;
}  //SyntaxError

  function importSum() {
   import {sum} from './cal.js';
}  //SyntaxError

*/