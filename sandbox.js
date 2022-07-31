const form = document.querySelector('.signup-form');
// if we aren't using a form we will need to select the element where the data is being input
// in this case we already have a form being captured so we can use the value property
    // const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    // the default behavior of submit is to refresh the page
    // we can stop this by using the preventDefault method on the event
    e.preventDefault();
    // this is how we grab the username if we don't already have a form
        // console.log(username.value);
    // since we already have the form we can capture the values of things inside it with .notation
    // this can work on name attributes or id attributes
        // <input type="text" id="username" placeholder="username">
        // <input type="text" name="username" placeholder="username">
    console.log(form.username.value);
});