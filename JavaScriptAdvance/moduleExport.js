let message = "Hello Everyone";

// cal.js
export let a = 10,
  b = 20,
  result = 0;

/* 
  for default export we don't need of function name.
  Ex. we can write 
  export default function () {
  result = a + b;
  return result;
}
*/
  
/* export */ function sum() {
  result = a + b;
  return result;
}

/* export */ function multiply() {
  result = a * b;
  return result;
}

/*
  Note that the export keyword requires the function or class to have a name to be exported. 
  You can’t export an anonymous function or class using this syntax.
*/

export default message;
export {sum as add, multiply};

/*
  It’s possible to export bindings that you have imported. This is called re-exporting.

  import { sum } from './math.js';
  export { sum };

  statement is equivalent to

  export {sum} from './math.js';


  */
