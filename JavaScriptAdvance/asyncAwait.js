/*
  "async and await make promises easier to write"

      async makes a function return a Promise
      await makes a function wait for a Promise
*/

// const posts = [
//     { title: "Post 1", body: "This is a post one" },
//     { title: "Post 2", body: "This is a post two" },
//   ];
  
//   function getPost() {
//     setTimeout(() => {
//       let output = "";
//       posts.forEach((post) => {
//         output += `<li>${post.title}</li>`;
//       });
//       document.body.innerHTML = output;
//     }, 1000);
//   }
  
//   function createPost(post) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         posts.push(post);
  
//         let error = false;
  
//         if (!error) {
//           resolve();
//         } else {
//           reject("Error : Something went to wrong");
//         }
//       }, 2000);
//     });
//   }

// async function init(){
//     await createPost({ title: "Post 3", body: "This is a post three" });

//     getPost();

// }

// init();

// async function fetchDetails(){
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const arrangeData = await data.json();

//     console.log(arrangeData);
// }

// fetchDetails();

// function getUsers(callback) {
//     setTimeout(() => {
//       callback([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   }
  
//   function findUser(username, callback) {
//     getUsers((users) => {
//       const user = users.find((user) => user.username === username);
//       callback(user);
//     });
//   }
  
//   findUser('john', console.log);

const sayHello = function(message1){
    return new Promise( (resolve, reject) => {
        console.log(`Hello, ${message1}`)
        if(message1 === 'John'){
            resolve("You are Intern");
        }else{
            reject("You are Student");
        }
    });
}

const processRequest = function(message2){
    return new Promise( (resolve, reject) => {
        console.log("Welcome to Simform");
        resolve(`${message2} and Your desk no 32`);
    });
}

async function work(){
    try{
        const response = await sayHello('John');
        console.log("Response Received");
        const processResponse = await processRequest(response);
        console.log(processResponse);
    }catch (error){
        console.log(error);
    }
    
}
work();

// Hello, John
// Response Received
// Welcome to Simform
// You are Intern and Your desk no 32

/*
  without try-catch when promise rejected :
    Hello, Joe
    Uncaught (in promise) You are Student

    with try-catch when promise rejected :
    Hello, Joe
    You are Student
*/