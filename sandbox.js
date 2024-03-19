// now we want to check what the user enters into the username field and validate it against some criteria
// we'll start by grabbing the form
const form = document.querySelector('.signup-form');

// added a div class in the html to provide feedback
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

// now we'll attach an event listener on the submit input and prevent the default action
form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    // we need the username that is being submitted
    const username = form.username.value;
    // to validate the username we need the pattern we will validate against
    // we moved this up to the global scope to use in our next function as well
    // const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback if true
        feedback.textContent = 'that username is valid!'
    } else {
        // feedback if false
        feedback.textContent = 'username must contain only letters and be 6-10 characters long'
    }
});

// it would be nice to provide feedback while the user is typing in the username instead of only after submitting
// for this we can use the keyup event to listen for the release of a key and then provide the feedback

form.username.addEventListener('keyup', e => {
    // we want to test against what the user has input and we can do that two ways
    // e.target.value and form.username.value both show the same information
    // we're going to use e.target.value to avoid an issue if we change the name of the form for any reason
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        console.log('passed');
        // there are multiple ways to select the input
        // form.input.setAttribute('class', 'success');
        // form.username.setAttribute('class', 'success');
        // chrome was also overwriting my border style, but it worked in firefox
        // you could also outline the whole form
        form.setAttribute('class', 'success');
    } else {
        console.log('failed');
        form.setAttribute('class', 'error');
    }
    // we also have a lot of interesting values/data available to us with the keyup event
    console.log(e);
});