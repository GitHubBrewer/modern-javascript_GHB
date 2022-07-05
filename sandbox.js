// variables and block level scope
// variable set with global scope
let age = 30;

// let age = 50;

if (true) {
    // local scope for age and can only be accessed inside this code block
   let age = 40;
   let name = 'shaun'
   console.log(`inside 1st code block age = ${age} and name = ${name}`);
    if (true) {
        let age = 50;
        console.log(`inside 2nd code block age = ${age} and name = ${name}`);
    }

}
// we can't access variables created inside code blocks
console.log(`outside code block age = ${age} and name = ${name}`);