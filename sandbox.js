// primitive vs reference types
// primitive types are stored in the stack in memory (limited space but fast access)
    // numbers
    // strings
    // Booleans
    // null
    // undefined
    // symbols
// reference types are stored in the heap in memory (more space but slower access)
    // all types of objects
        // object literals
        // arrays
        // functions
        // dates, Math, etc.

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


// because primitive values are stored in the stack they keep their values unless explicitly updated
// scoreTwo is already set to the intial value scoreOne had (50) and updating scoreOne doesn't update scoreTwo
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// reference values
// these values are stored on the heap with a pointer from the variable to the values stored in the stack
const userOne = { name: 'ryu', score: 50};
// this adds a new record in the stack but points to the same array in the heap, not a second array
const userTwo = userOne;

console.log(userOne, userTwo);
// because the pointers are stored in the stack and both point to the same array, updating the array updates for both
userOne.name = 'chun-li';
console.log(userOne, userTwo);

// it also means that updating userTwo will update userOne
userTwo.score = 100;
console.log(userOne, userTwo);