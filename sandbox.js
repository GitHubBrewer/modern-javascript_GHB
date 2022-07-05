// functions can be created two different ways
    // they can be declared or they can be expressed
// declared functions are hoisted by JS meaning they are read as though they were at the top of the file
// this allows them to be called/invoked before actually declaring them
greet();
greet();
greet();

// expressed functions are not hoisted and so must be expressed before they are invoked/called
// comment out the call below to see the rest of the code execute
speak();
// speak();
// speak();

// function declaration
// we start with the function statement and then name the function
// we can pass in (optional variables) and follow it with the {code block} 
function greet() {
    console.log('hello there');
}

// function expression
// we start with a const to prevent changing the function by mistake
// we name the function then follow the same process as the declaration with one addition
// expressions MUST end with the ; after the code block since we are expressing it through a variable
const speak = function () {
  console.log('good day');
};

speak();
speak();
speak();
