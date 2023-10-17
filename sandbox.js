// for loops
// contains 4 elements
// for(a; b; c){d}
// a = initialization variable
// b = condition (evaluates to true or false) if true it runs the code block
// c = final expression (executes at the end of the code block)
// d = code block
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log(`loop finished`);

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    // square brackets are used to denote the index we want
    // console.log(names[i]);
    // in a string that's a specific character, in an array that's an entire element
    console.log(`the name in position ${i} is ${names[i]}`);
    // we can use the loop to assist in creating some html
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
console.log(`loop finished`);
