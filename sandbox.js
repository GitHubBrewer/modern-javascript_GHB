// callback hell
// if we have several calls we need to make on different files and need to wait for each to complete before we proceed

// add a new parameter for resource
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback(`could not fetch the data due to error ${request.status}`, undefined);
        }
    });
    // change the request.open to accecpt an argument instead of a fixed entry
    request.open('GET', resource);
    request.send();
};

// now we can pass the address in for the first JSON file
getTodos('todos/luigi.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    // then follow the first call with the second
    getTodos('todos/mario.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
        // and then the third
        getTodos('todos/shaun.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });
});

// this is a triangle of doom aka callback hell and is getting hard to maintain and read