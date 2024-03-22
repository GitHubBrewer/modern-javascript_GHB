// sort method

// example 1 - sorting strings
const namesOne = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
const namesTwo = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
const namesThree = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// sort in alphabetical order
namesOne.sort();
console.log(namesOne);

// this is a destructive method even if you store the sorted array in a new const
const namesStored = namesTwo.sort();
console.log(namesStored, namesTwo);

// to be non-destructive, we need to use .toSorted()
const namesSafeSort = namesThree.toSorted();
console.log(namesSafeSort, namesThree);


// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort();
// notice how this doesn't actually work? It's converting the numbers to strings
console.log(scores);

// to correct this we need to use the compare function in the method
// we will also use toSorted to avoid creating a bunch of arrays for demonstration
// from https://www.w3schools.com/js/js_array_sort.asp
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, no changes are done with the sort order of the two values.
const scoresTrue = scores.toSorted(function(a,b){return a - b});
console.log(scores, scoresTrue);


// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

console.log('original', players);

// need to provide additional information for objects because it needs to know what to compare
// a represents the current item and b is the next item
const playersOne = players.toSorted((a,b) => {
    // this is a simplified version of what the compare function is doing
    if(a.score < b.score){
        return -1; // when a is lower return a negative number to decrease its position
    } else if (b.score < a.score){
        return 1; //when a is higher return a postive number to increase its position
    } else {
        return 0; // when they are equal return 0 and don't change positions
    }
});
console.log('sorted ascending by score', playersOne);

// we can also clean up the arrow function and reverse it by swapping the calculation
const playersTwo = players.toSorted((a,b) => b.score - a.score);
console.log('sorted descending by score', playersTwo);

// bonus method - reverse
const namesFour = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// if we want to reverse then we can sort as normal
namesFour.sort();
// then reverse it
namesFour.reverse();
console.log(namesFour);

const scoresReverse = [10, 50, 20, 5, 35, 70, 45];
scoresReverse.sort();
scoresReverse.reverse();
console.log(scoresReverse);