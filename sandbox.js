// logical operators
// used in conjunction with true/false conditions
// || denotes OR
// && denotes AND
let password = 'p@ssword1234';
// let password = 'password1234';
// let password = 'p@ssword';
// let password = 'pass';


if (password.length >= 12 && password.includes('@')) {
    console.log(`Your password is mighty strong`)
} else if (password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is long enough, but could be stronger');
} else {
    console.log(`Your password is only ${password.length} characters long. That's too short!`);
}
