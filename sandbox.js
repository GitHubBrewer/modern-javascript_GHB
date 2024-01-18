// functions vs methods
// methods are functions, but they differ in how we invoke them and where they are defined


// functions
// here we will create an arrow function with no parameters that returns a string
const greet = () => 'hello';

// we can return the result from the function directly
console.log(greet());

// we can also store the function in a variable and return the result by invoking the function
let resultOne = greet();
console.log(resultOne);

// functions are just a set of instructions that perform a task

// methods
// methods are also a set of instructions but they are associated with an object
// a method is a property of an object that is a function
// methods are invoked using dot notation
// other properties of objects can be accessed using dot notation OR bracket notation, but that's for a later lesson

// we'll start with a constant
const firstName = 'Shaun';
console.log(firstName);

// now we can invoke a method to change the case
console.log(firstName.toLowerCase());
// note that this hasn't changed the original string, we're just passing the object into the function as an argument
console.log(firstName);

// even when we invoke the method in a stored variable
let resultTwo = firstName.toUpperCase();
console.log(resultTwo);
// we still don't change the original string
console.log(firstName);

resultTwo = firstName.toUpperCase();
console.log(resultTwo);
console.log(firstName);