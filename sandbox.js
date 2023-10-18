// do while loops
// we'll start with what a while loop looks like
console.log('here is a while loop');
let i = 0;
while(i < 5){
    console.log(`value of i is ${i}`);
    i++;
}
console.log(`the value of i is now ${i}`);

console.log("now let's look at a do while loop");
// if we want the loop to execute the code block 
// at least one time even if the condition has already been met 
// we can use a do while loop
// first we initialize i
i = 5;
console.log(`the value of i is now ${i}`);

// then we throw in the code block with a do statement
// this lets us run (do) the code before checking the condition
do{
    console.log(`value of i is ${i}`);
    // Incrementing i isn't necessary in this specific example,
    // but does ensure the loop breaks out if the condition isn't met 
    i++;
    // finally we make the conditional statment
} while(i < 5);

console.log(`the value of i is now ${i}`);

console.log("and now a do while where the condition isn't already met");
// here's what happens if the condition hasn't already been met
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