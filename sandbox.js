// http request status codes
// it isn't enough to just check the readyState because even a request sent to the wrong url will reach state 4

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log(`could not fetch the data due to error ${request.status}`)
    }
});

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// with the wrong url we get to state 4, but the response status is 404
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // The server cannot find the requested resource.
request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
request.send();