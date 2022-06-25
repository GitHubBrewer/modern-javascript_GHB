// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string properties allow you to determine the properties of a string 
// string length
console.log(fullName.length);

// string methods change the output of strings
// some change the original variable, but others don't
console.log(fullName.toUpperCase());
console.log(fullName);
let result = fullName.toLowerCase();
console.log(result, fullName);

// the string can be redifined using the method if you want to truly change it
fullName = fullName.toLowerCase();
console.log(fullName);

let index = email.indexOf('@');
console.log(index);