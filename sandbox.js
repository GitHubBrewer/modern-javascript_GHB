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

console.log ("Now let's try doing this on an array of passwords");
// creating an array of passwords
let passwords = ["pass","password","p@ssword","p@ssword1234"];

i = 0

while (i < passwords.length){
    if (passwords[i].length >= 12 && passwords[i].includes('@')) {
        console.log(`"${passwords[i]}" is a mighty strong password!`);
        i++;
// note the use of the ! operator to test if the password DOES NOT include the @ symbol        
    } else if (passwords[i].length >= 8 && !passwords[i].includes('@')) {
        console.log(`"${passwords[i]}" is long enough at ${passwords[i].length} characters, but could be stronger.`);
        i++;
    } else if (passwords[i].includes('@') && passwords[i].length > 5) {
        console.log(`"${passwords[i]}" has the potential to be a mighty strong password, but it's a little short at only ${passwords[i].length} characters.`);
        i++;
    } else {
        console.log(`C'mon, you can do better! "${passwords[i]}" is only ${passwords[i].length} characters long!`);
        i++;
    }
}
