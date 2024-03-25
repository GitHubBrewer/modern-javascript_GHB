// async code and callbacks
// we want to wrap up the request in a single function now

// 1. we start with a new const amd move all the code inside it
// 4. then we add the callback as a parameter here
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // 5. instead of logging to the console, we return the callback
            // this will be whatever we pass into getTodos() as an argument
            // console.log(request, request.responseText);
            // callback();
            // 9. now we can pass in values to the parameters based on the expected responses
            // since we won't have an error in this situation we set err to undefined
            // and we enter our desired success response for data
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            // 5. cont we do the same thing here
            // console.log(`could not fetch the data due to error ${request.status}`)
            // callback();
            // 9. cont and we flip it here
            callback(`could not fetch the data due to error ${request.status}`, undefined);
        }
    });
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

// 12. finally we can see the asynchronous code in action by placing a couple items before and after and seeing when the fire
console.log(1);
console.log(2);

// 2. Then we can call it with getTodos()
// 3. to give us more flexibility we can use a callback function so we create an arrow function inside getTodos()
// 8. so we want to add 2 parameters to our callback function err and data
// convention is that we pass errors first and then data
getTodos((err, data) => {
    // 6. we can test to see it working at this point
    console.log('callback fired');
    // 7. this isn't going to work since it returns even with an arrow so we need to add parameters to our callback
    // 10. now we can log out err and data and get the correct response based on the outcome
        // console.log(err, data);
    // 11. now we can create an if esle if statement around this
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
