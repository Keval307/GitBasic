const posts =[
               {title : 'Post 1', body : 'This is a post one'},
               {title : 'Post 2', body : 'This is a post two'}
];

function getPost(){
    setTimeout( () =>{
        let output = '';
        posts.forEach((post) => {
          output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    } ,1000);
}

//getPost();

// function createPost(post){
//   setTimeout( ()=> {
//       posts.push(post);
//   } ,2000);
// }

// createPost({title : 'Post 3', body : 'This is a post three'});
// //Here getPost() have timeout for 1 sec and createPost having 2 sec for timeout so screen only present two  post

// console.log(posts);

function createPost(post , callback){
    setTimeout( ()=> {
        posts.push(post);
        callback();
    } ,2000);
}

createPost({title : 'Post 3', body : 'This is a post three'}, getPost);