// if statements
// these differ from loops in that they are only meant to run once

let age = 20;
console.log(`let's see if this if statement works`);
if (age > 20) {
    console.log('you are over 20 years old');
}
console.log(`I guess it worked, but we don't see anything...`);

console.log(`let's try again when you're a little older`);
age = 21;
if (age > 20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log(`There are ${ninjas.length} ninjas. That's a lot of ninjas!`);
}

// we can use if statements to check things like password length or complexity
let password = 'pass';

console.log(`let's see if that password is long enough`);
if (password.length >= 8) {
    console.log('that password is long enough');
}
console.log(`... guess not :(`);

console.log(`let's try again with a longer password`);
password = 'password';
if (password.length >= 8) {
    console.log(`that password is long enough because it's ${password.length} characters long`);
}

// unfortunately this only provides feedback in one state
// we can tell you if it's long enough OR too short, but not both