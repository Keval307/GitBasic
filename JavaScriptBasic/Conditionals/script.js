document.getElementById('root').innerHTML = "Hello World!!";

let message1 = 'Hello'
let message2 = "Hii"

if(1.1+1.3 === 2.4){
   console.log(message1);
}//Statement in the If block not executed..

else if(+(1.1+1.3).toFixed(2) === 2.4){
 console.log(message2);
}

else{
    console.log("else statement");
}

console.log(2<3 ? message1 : message2);
