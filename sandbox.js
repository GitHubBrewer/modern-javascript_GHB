// variables and block level scope
// variable set with global scope
let age = 30;

// let age = 50;

if (true) {
    // local scope for age and can only be accessed inside this code block
   let age = 40;
   const name = 'shaun'
   console.log(`inside 1st code block age = ${age} and name = ${name} and test = ${test}`);
    if (true) {
        // because this code block is inside another code block we can initialize an existing variable again because of local scope
        // global and block/level scope works for const and let
        let age = 50;
        const name = 'mario';
        // the older var usage ignores block/level scope and variable initialized with it are available outside their local scope
        var test = 'hello';
        console.log(`inside 2nd code block age = ${age} and name = ${name} and test = ${test}`);
    }

}
// we can't access variables created inside code blocks as seen with the name variable
// unless they are defined with the older var statement
console.log(`outside code block age = ${age} and name = ${name} and test = ${test}`);