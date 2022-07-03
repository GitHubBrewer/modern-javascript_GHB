// booleans and comparisons
// booleans are a data type that contain just two values, true and false
console.log(true,false, "true", "false");

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';

let result = email.includes('@');
console.log(result);

result = email.includes('!');
console.log(result);

let names = ['mario', 'luigi', 'toad'];
result = names.includes('luigi');
console.log(result);

// comparison operators
// There are 6 comparison operators
    // == equals
    // != does not equal
    // > greater than
    // < less than
    // >= greater than or equal to
    // <= less than or equal to
let age = 25;
console.log(age == 25); // == is for abstract equality, it doesn't consider the value's type in the comparison
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

// other data types can also be compared and have their own rules
// strings consider the position in the alphabet and treat upper-case as lower than lower-case
let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name == 'Crystal');