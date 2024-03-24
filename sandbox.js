// making http requests
// first we create the request object, the XML data type is old and this request can work with many data types
const request = new XMLHttpRequest();

// 3. we can track the progress of the request if we attach an eventListener to the request
// we'll track the state changes https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', () => {
    // we can see in the console that it goes through 4 states from the request
    // console.log(request, request.readyState);
    // we only really care when it reaches readyState 4 so we can create an if statement for that
    if (request.readyState === 4) {
        // then we can grab the responseText
        console.log(request.responseText);
    }
});

// 1. we create the open request stating the method (GET) and the url
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// 2. we send the request
request.send();
// console.log(request);