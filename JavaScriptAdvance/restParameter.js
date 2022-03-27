//rest parameter :- The last parameter (args) is prefixed with the three-dots ( ...). It’s called a rest parameter ( ...args).

function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")
  myFun('one');
//   Console Output:
//   a, one
//   b, two
//   manyMoreArgs, ["three", "four", "five", "six"]
//   a, one
//   b, undefined
//   manyMoreArgs, []

function sum(...args) {
  let total = 0;
  for (const a of args) {
      total += a;
  }
  return total;
}

console.log(sum(1, 2, 3));
