// while loops
// we'll start with what a for loop looks like
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}
console.log(`loop finished`);

// while loops perform the same function with different syntax
// we pull the initialization variable out of the while loop
let i = 0;

// the condition stays in the same place
while(i < 5){
    console.log(`in loop: ${i}`);
    // the final expression moves inside the code block (typically at the end of the block)
    i++;
}
console.log(`i = ${i}`);

// now showing how we can iterate through an array just like in a for loop
// start by delcaring our array
const names = ['shaun', 'mario', 'luigi'];

// I have to reset i back to zero
i = 0

// confirming that it has been reset
console.log(`i = ${i}`);

// performing the while loop
while(i < names.length){
    console.log(`in loop: ${i} and the name is ${names[i]}`);
    i++;
}

console.log(`loop finished and i = ${i}`);
