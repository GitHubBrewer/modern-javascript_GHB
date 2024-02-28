// callback functions
// this is where you create a function that is taking in another function as an argument
// here's an example from MDN that I formatted as arrow functions
const processUserInput = callback => {
  var name = prompt('Please enter your name.');
  callback(name);
}
const greeting = name => alert('Hello ' + name);

processUserInput(greeting);

// looking back now, that doesn't make much sense in trying to explain what a callback function is
// here's one from https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/
function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}
  
function logQuote(quote){
    console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1


// here is shaun's example that calls a callback function from inside a method
// remembering that methods are just functions that are called with dot notation
let people = ['mario', 'luigi', 'ryu', 'chun-li', 'shaun'];

people.forEach(function(person){
    console.log(`something`);
});

// pulling the value from each iteration through forEach
// also converting to an arrow function
people.forEach((person) => {
    console.log(person);
});

// this is me playing around with string templates and trying to pull different data in
people.forEach((person) => {
    console.log(`index of ${people.indexOf(person)} is ${person}`);
});

// I don't remember where I pulled these from. I think another youtube channel
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

// this made more sense than anything else, I think from that same video

// create function with a callback function built in
function orderPizza(callback) {
    console.log('pizza is ordered');
    setTimeout(() => {        
        const pizza = '🍕';
        callback(pizza);
    }, 2000);
}

// create a 2nd function that can be called when the 1st function completes

function pizzaReady(pizza) {
    pizza = '🍕';
    console.log(`Eat the ${pizza}`);
}
// pizzaReady(orderPizza);
orderPizza(pizzaReady());
console.log('Call Jay');

/* 
https://www.youtube.com/watch?v=ranuTFXPgbw 
3:45 in says, "give me a function that you want me to call when that work is done"

https://en.wikipedia.org/wiki/Callback_(computer_programming)
In computer programming, a callback or callback function is any reference to executable code 
that is passed as an argument to another piece of code; 
that code is expected to call back (execute) the callback function as part of its job. 
This execution may be immediate as in a synchronous callback, 
or it might happen at a later point in time as in an asynchronous callback. 
They are also called blocking and non-blocking. 

https://www.w3schools.com/js/js_callback.asp
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

At the end of the day, these are all very simplified examples
standard uses of callbacks are typically involved in more complex asynchronous code
*/