// type conversion
let score = '100';

console.log(score + 1);
console.log(score);
console.log(typeof score);
console.log(score ++); // I'm not sure what this is doing
console.log(typeof score); // using the ++ on the string converted it into a number type
console.log(score);

score = Number(score);
console.log(score);
console.log(score + 1);
console.log(score ++);

let result = Number('hello');
console.log(result);

result = Number('50');
console.log(result, typeof result);

result = String(50);
console.log(result, typeof result);

result = Boolean(100); // positive and negative values are truthy
console.log(result, typeof result);

result = Boolean(0); // zero is falsey
console.log(result, typeof result);

result = Boolean('0'); // strings of any length are truthy
console.log(result, typeof result);

result = Boolean(''); // empty strings are falsey
console.log(result, typeof result);