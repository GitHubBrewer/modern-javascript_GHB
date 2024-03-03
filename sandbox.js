// Math object
// this is a built-in object that we can use
console.log(Math);

// it has several functions available for us to use
console.log(Math.PI);
console.log(Math.E);

// we can use methods on the Math object
const area = 7.7;
// we can round to the nearest whole number
console.log(Math.round(area));
// we can round down to the whole number
console.log(Math.floor(area));
// we can round up to the whole number
console.log(Math.ceil(area));
// we can truncate to the whole number
console.log(Math.trunc(area));

// we can generate random numbers between 0 and 1
const random = Math.random();
console.log(random);

// if we want a random number between 1 and 100
console.log(random * 100);
console.log(Math.round(random * 100));