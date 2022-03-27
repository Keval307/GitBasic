const a = {}; //object created
//property assignment
a.name = 'Ram';  
a['age'] = 25;
console.log(a);

const myCar = new Object(); //object created
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

const employee = {
    name : 'Shyam',
    age : 28,
    teamManager : true,
    showInfo : function(realAge){
        console.log("Hello! I am "+this.name+" and I am "+this.age+" years old but as per birth certificate I am "+realAge+" years old");
    }
}; // object created & initialize
console.log(employee);

//changing property value
employee.age = 29;
employee.teamManager = false;
console.log(employee);//{name: 'Shyam', age: 29, teamManager: false, showInfo: ƒ}
employee.showInfo(32);

//for string
let message = 'hello';

function changeMessage(message){
    message = 'hi';
}

changeMessage(message);
console.log(message); // Hello

//for object
function changeAge(emp){
 emp.age++;
}//call by a reference

changeAge(employee);
console.log(employee.age);

//built in objects
const date = new Date();
console.log(date); //Mon Feb 21 2022 18:56:09 GMT+0530 (India Standard Time)
console.log(date.getDate()); //21