// arguments and parameters
// these terms are used interchangebly but they are not the same
// parameters are defined in the function
// arguments are passed into the function when it's called
// start with a function expression
// we add parameters to the function called name and time
const speak = function(name, time) {
    // we can then use the parameters in the code block
    console.log(`good ${time} ${name}!`);
};

// now we pass in an argument to be used in the function
speak('mario', 'morning');
// note that the code parameter can't be called outside the code block as it only has local/block scope
console.log(name);
// we just get an empty string

// what happens if we fail to pass in any arguments
speak();

// to avoid these undefined outputs we can define default values when we establish the parameters
const speakWDefault = function(name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};
// now we can call the function and receive default values
speakWDefault();
// or override with my own values
speakWDefault('mario','morning');
// or only override with one value
speakWDefault('mario');
// i'm not sure how to only pass in the 2nd argument
speakWDefault('','morning');

