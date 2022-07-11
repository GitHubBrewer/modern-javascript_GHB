// object literals
// created with {}
// filled with key:value pairs separated by ,

let user = {
    name: 'crystal',
    age: 30,
    location: 'berlin',
    email: 'crystal@thenetninja.co.uk',
    blogs: ['why mac and cheese rules', '10 things to make with marmite']
};

console.log(user);
// values can be accessed by dot notation
console.log(user.name);

// values can be updated by dot notation
user.age = 35;
console.log(user.age);

// values can also be accessed by [] notation
console.log(user['location']);
// and updated by [] notation
user['name'] = 'chun-li';
console.log(user['name']);

// an advantage to [] notation is the ability to pass in variables
let key = 'location';
console.log(user[key]);
// we couldn't use user.key since JS would be looking for a key:value called key

console.log(typeof user);
