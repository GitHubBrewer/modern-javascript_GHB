// object literals
// created with {}
// filled with key:value pairs separated by ,
// can all be one line, or can break up to make it easier to read
// last key:value pair does not need comma since that is only used as a separator

let user = {
    name: 'crystal',
    age: 30,
    location: 'berlin',
    email: 'crystal@thenetninja.co.uk',
    blogs: ['why mac and cheese rules', '10 things to make with marmite']
};

console.log(user);
// values can be accessed by dot notation calling the key
console.log(`the value of name is ${user.name}`);

// values can be updated by dot notation
console.log(`the value of age is ${user.age}`);
user.age = 35;
console.log(`the value of age is now ${user.age}`);
console.log(user);
// if the value is an array you can call a specific element using the index
console.log(user.blogs[0]);


// values can also be accessed by [] notation
console.log(`the value of location is ${user['location']}`);
// and updated by [] notation
console.log(`the value of name is ${user['name']}`);
user['name'] = 'chun-li';
console.log(`the value of name has been updated to ${user['name']}`);
// we can still access elements of an array when using square bracket notation
console.log(`the value of name element 0 of blogs is "${user['blogs'][0]}"`);

// an advantage to [] notation is the ability to pass in variables
let key = 'location';
const otherKey = 'blogs';
console.log(`calling a value using a variable - ${user[key]}`);
console.log(`calling a value using a variable - ${user[otherKey][0]}`);
// we couldn't use user.key since JS would be looking for a key:value called key
console.log(`calling a value using a variable - ${user.key}`);
console.log(user.key);
console.log(typeof user);
