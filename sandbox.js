// reduce method
// returns any single value you want based on the values you iterate over
const scores = [10, 20, 60, 40, 70, 90, 30];

// use reduce method to return a result of how many scores are over 50
// takes in two parameters, accumulator and current
// acc is a running total and is rememberd through each iteration
// doesn't have to be a value, it could be an object that we add a property to
// curr is the value of the item in the array that we are currently iterating through
const result = scores.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    }
    // remember to return the acc or the code in the if block doesn't mean anything
    return acc;
    // this is where we declare the starting value of acc
}, 0);

console.log(result);

const complexScores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

// we want to use the reduce method to calculate the total score of mario's scores
const marioResult = complexScores.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioResult);