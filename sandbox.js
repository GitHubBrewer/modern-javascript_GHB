// arrays
// part of the OBJECT data type
// denoted by elements contained within square brackets
// separate elements with commas
let ninjas = ['shaun','ryu','chun-li'];
// can isolate specific elements with square-bracket notation
// JS is still zero-based language
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);

// arrays can hold other data types as well
let ages = [20,25,30,35];
console.log(ages[1]);

// arrays can also hold mixed data types
let random = ['shaun','crystal',20,30];
console.log(random);

// arrays also have properties like the other data types
console.log(ninjas.length);

// array methods
let result = ninjas.join(',');
console.log(result);

// join defaults to comma if nothing is passed in
result = ninjas.join();
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ken','crystal']);
console.log(result);

// push is a destructive method and resturns the length of the array
result = ninjas.push('ken');
console.log(result);
console.log(ninjas);

// pop is also destructive and returns the last item removed
result = ninjas.pop();
console.log(result);
console.log(ninjas);