// now we want to check what the user enters into the username field and validate it against some criteria
// we'll start by grabbing the form
const form = document.querySelector('.signup-form');

// added a div class in the html to provide feedback
const feedback = document.querySelector('.feedback');

// now we'll attach an event listener on the submit input and prevent the default action
form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    // we need the username that is being submitted
    const username = form.username.value;
    // to validate the username we need the pattern we will validate against
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback if true
        feedback.textContent = 'that username is valid!'
    } else {
        // feedback if false
        feedback.textContent = 'username must contain only letters and be 6-10 characters long'
    }
});
