// handling JSON data
// everything in a JSON file has to be in double-quotes except numbers and booleans and null
// https://www.w3schools.com/js/js_json_intro.asp

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback(`could not fetch the data due to error ${request.status}`, undefined);
        }
    });
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', 'todos.json');
    request.send();
};

getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});