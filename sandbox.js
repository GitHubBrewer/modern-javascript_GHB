// else if statements
// we'll start with an if...else statement
console.log(`here's an if...else statement`);
let password = 'p@ss';

if (password.length >= 8) {
    console.log('that password is long enough');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}

// here it is if the password meets the first condition
console.log(`here's another if...else statement`);
password = 'p@ssword';

if (password.length >= 8) {
    console.log('that password is long enough');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}

// if we want to check more than two conditions we can use else if statements
console.log(`now let's see an if...else with an else if clause`);
password = 'p@ss';

if (password.length >= 12) {
    console.log(`Your password is mighty strong since it's ${password.length} characters long!`)
} else if (password.length >= 8){
    console.log('that password is long enough, but could be stronger');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}

// testing with longer password to meet 2 statement
password = 'p@ssword';

if (password.length >= 12) {
    console.log(`Your password is mighty strong since it's ${password.length} characters long!`)
} else if (password.length >= 8){
    console.log('that password is long enough, but could be stronger');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}

// testing with even longer password to meet first condition
password = 'p@ssword1234';

if (password.length >= 12) {
    console.log(`Your password is mighty strong since it's ${password.length} characters long!`)
} else if (password.length >= 8){
    console.log('that password is long enough, but could be stronger');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}