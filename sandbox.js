// switch statements
// they use strict equality to evaluate
// allows you to evaluate against several possible cases
// and provide different codes based on the case
// also provides a default code block if none of the cases match
const grade = 'D';

// using if statements
if (grade === 'A') {
    
} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

} else if(grade === 'F'){
    
} else {

}

// using switch statement
/* 
switch(variable to be evaluated){
     code block;
 } 
 */

switch (grade) {
    case 'A':
        console.log(`You got an ${grade}`);
        break;
    case 'B':
        console.log(`You got an ${grade}`);
        break;
    case 'C':
        console.log(`You got an ${grade}`);
        break;
    case 'D':
        console.log(`You got an ${grade}`);
        break;
    case 'F':
        console.log(`You got an ${grade}`);
        break;
    // this is what is used when nothing matches the vairable
    default:
        console.log('Not a valid grade');
}