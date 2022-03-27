// const posts = [
//   { title: "Post 1", body: "This is a post one" },
//   { title: "Post 2", body: "This is a post two" },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       let error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error : Something went to wrong");
//       }
//     }, 2000);
//   });
// }

// createPost({ title: "Post 3", body: "This is a post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// const promise1 = fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => res.json()
//   );;
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 20000, "Good Bye");
//   });
// const promise3 = Promise.resolve("Hello world")

// const promise4 = 10;

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// ); //[Array(10), 'Good Bye', 'Hello world', 10]

// Promise.race([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// ); //Hello world

// /* 
//   The Promise.race() static method accepts a list of promises as an iterable object 
//   and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.
// */

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 60
//     return result * 4;
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 3;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 4;
// });

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

const fun = function(message2){
    return new Promise( (resolve, reject) => {
        console.log("Welcome to Simform");
        resolve(`${message2} and Your desk no 32`);
    });
}

sayHello('John').then(response => {
    console.log("Response Received");
    return fun(response);
}).then(processResponse => {
    console.log(processResponse)
}).catch(error => console.log(error));


// Hello, John
// Response Received
// Welcome to Simform
// You are Intern and Your desk no 32