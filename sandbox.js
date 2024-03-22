// find method
// returns the first element in an array that passes a test in the callback function
const scores = [10, 5, 0, 50, 60, 10 ,20, 70];

// find the first score in this array that is over 50 and return that value
const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);