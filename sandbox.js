// do while loops
// we'll start with what a while loop looks like
let i = 0;
while(i < 5){
    console.log(`value of i is ${i}`);
    i++;
}
console.log(`the value of i is now ${i}`);

// if we want the loop to execute the code block 
// at least one time even if the condition has already been met 
// we can use a do while loop
// first we initialize i
i = 5;
console.log(`the value of i is now ${i}`);

// then we throw in the code block with a do statement
// this lets us run the code before checking the condition
do{
    console.log(`value of i is ${i}`);
    i++;
    // finally we make the conditional statment
} while(i < 5);

console.log(`the value of i is now ${i}`);

// here's what happens if the condion hasn't already been met
i = 3;
console.log(`the value of i is now ${i}`);

do{
    console.log(`value of i is ${i}`);
    i++;
} while(i < 5);

console.log(`the value of i is now ${i}`);
// the code block doesn't get an extra run since we increment inside the code block
// and check the condition before returning for another pass
// once i hits 5 the while statement doesn't let us return to do