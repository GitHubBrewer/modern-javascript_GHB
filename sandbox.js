// even though we want to capture the event of submit, we don't focus on that element
// we care about the form, so we focus on the form and rely on the submit action to bubble up

const form = document.querySelector('.signup-form');

// if we aren't using a form we will need to select the element where the data is being input
// in this case we already have a form being captured so we can use the value property
// to grab the username id we use # for id followed by the value
// const username = document.querySelector('#username');

// we capture the submit event because that captures the click of the submit button
// and it also captures the user pressing enter within the form
form.addEventListener('submit', e => {
    // the default behavior of submit is to refresh the page
    // we can stop this by using the preventDefault method on the event
    e.preventDefault();
    // this is how we grab the username if we don't already have a form using the const above
        // console.log(username.value);
    // since we already have the form we can capture the values of things inside it with .notation
    // this can work on name attributes or id attributes
        // <input type="text" id="username" placeholder="username">
        // <input type="text" name="username" placeholder="username">
    console.log(form.username.value);
});