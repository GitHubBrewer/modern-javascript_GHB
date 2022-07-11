// callback functions
// this is where you define a function on it's own
// then you call that function within another function
// here's an example from MDN that I formatted as arrow functions
const greeting = name => alert('Hello ' + name);

const processUserInput = callback => {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

// here is shaun's example that calls a callback function from inside a method
// remembering that methods are just function that are called with dot notation
let people = ['mario', 'luigi', 'ryu', 'chun-li', 'shaun'];

const logPerson = people.forEach((person, index) => {
    console.log(`${index} - hello ${person}`);
});