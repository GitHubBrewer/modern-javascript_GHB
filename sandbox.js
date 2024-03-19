// even though we want to capture the event of submit, we don't focus on that element
// we care about the form, so we focus on the form and rely on the submit action to bubble up

const form = document.querySelector('.signup-form');

// if we aren't using a form we will need to select the element where the data is being input
// in this case we already have a form being captured so we can use the value property
// to grab the username id we use # for id followed by the value
// const username = document.querySelector('#username');

// we capture the submit event because that captures the click of the submit button
// and it also captures the user pressing enter within the form
form.addEventListener('submit', e => {
    // the default behavior of submit is to refresh the page
    // we can stop this by using the preventDefault method on the event
    e.preventDefault();
    // this is how we grab the username if we don't already have a form using the const above
        // console.log(username.value);
    // since we already have the form we can capture the values of things inside it with .notation
    // this can work on name attributes or id attributes
        // <input type="text" id="username" placeholder="username">
        // <input type="text" name="username" placeholder="username">
    console.log(form.username.value);
});

// testing regex (Regular Expressions)
// regex is a tool that lets us evalutate strings to find matches
// we can use mutiple tokens to evaulate the string and impose restrictions
// always starts with and ends with /
// . = any character
// [] = a single character e.g [a] = a,[a-z] = any lowercase letter, [a-zA-Z] = any lower OR uppercase character
// ^ = pattern must occur at the start of the string
// $ = pattern must end at the end of the string
// {x,y} = length constraints where x = minimum length and y = maximum length and where either x or Y can be empty
// {1,10} = string is 1 to 10 characters long, {6,} = string is at least 6 characters with no upper limit
let username = 'shaun';
const pattern = /^[a-z]{6,}$/;

console.log(username);
let result = pattern.test(username);
console.log(`${result}, the username meets requirements`);

username = 'shaunp';
result = pattern.test(username);
console.log(`${result}, the username meets requirements`);

// an alternative to testing the pattern against the string is searching through the string for the pattern
// the former is boolean and the latter returns a value for where it starts or -1 for not found
// can be used for both, but is more useful when trying to find the pattern inside a string
let searchResult = username.search(pattern);
console.log(searchResult);

username = '23490shaunp@0984j';
searchResult = username.search(pattern);
console.log(searchResult);

let loosePattern = /[a-z]{6,}/;
searchResult = username.search(loosePattern);
console.log(searchResult);
