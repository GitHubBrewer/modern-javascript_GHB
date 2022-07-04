// break and continue
// break is used to leave the loop when a conditional statement is TRUE
// continue skips the rest of the code block and starts the next iteration when a coditional statement is TRUE

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    
    if(scores[i] === 0){
        continue;
    }

    console.log(`your score: ${scores[i]}`);

    if(scores[i] === 100){
        console.log('congratulations, you got the top score!');
        break;
    }
    
}