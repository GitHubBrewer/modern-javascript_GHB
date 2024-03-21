// filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

scores.filter(score => {
    // cycles through each item in the array and if true keeps the item and if false removes the item from the array
    // return true;
    return score > 20;
});

// this method is non-destructive
console.log(scores);

// to output the result of the method we will assign it to a variable
const filteredScores = scores.filter(score => {    
    return score > 20;
});

console.log(filteredScores);
console.log(scores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

/*
const premiumUsers = users.filter(user => {
    return user.premium;
    // if I needed to return users that are not premium, I need to flip the FALSW to TRUE
    // return !user.premium;  
});
*/

// we can shorten the arrow filter because we are just using a single return statement
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);