//## Template literals (Template strings) ##
let d = 5;
let e = 10;
console.log(`Fifteen is ${d + e} and
not ${2 * d + e}.`);//for new line
// "Fifteen is 15 and
// not 20."

//If a string contains a backtick, you must escape it using a backslash (\)

let strWithBacktick = `Template literals use backticks \` insead of quotes`;
console.log(strWithBacktick);

let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

const {title, excert, body, tags} = post;

console.log(`Title : ${title}
Excerpt : ${excert}
Body : ${body}
Tags : ${tags}`);