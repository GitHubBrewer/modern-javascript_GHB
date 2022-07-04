// if statements
// these differe from loops in that they are only meant to run once

let age = 20;

if (age > 20) {
    console.log('you are over 20 years old');
}

age = 21;
if (age > 20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log(`There are ${ninjas.length} ninjas. That's a lot of ninjas!`);
}

// we can use if statements to check things like password length or complexity
const password = 'pass';

if (password.length >= 8) {
    console.log('that password is long enough');
}
// unfortunately this only provides feedback in one state
// we can tell you if it's long enough OR too short, but not both