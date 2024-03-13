// we can now interact with the webpage, but we want to allow the user to interact as well
// to achieve this we need to watch for things the user does to interact
// we call this listening for events
// we've placed a button the screen and want to listen for the user to click on the button
// first we grab the button
const button = document.querySelector('button');
// now we attach an event listener for the click and add a callback function to do something after they click
button.addEventListener('click', () => {
    console.log('you clicked me');
});
// it doesn't have to be buttons that we can listen on, any element can have a listener attached
// https://developer.mozilla.org/en-US/docs/Web/Events
const items = document.querySelectorAll('li');
// the DOM returns a NodeList that we can apply the forEach method on
console.log(items);
// we will attach an eventListener to each li tag
items.forEach(item => {
    // now we can add a callback function to the click event
    // note the e paramter we supply, this is inherent in eventListeners and provides a bunch of properties we can use
    item.addEventListener('click', (e) => {
        // here are all the event properties
        console.log(e);
        // here are the properties of the target
        console.log(e.target);
        // we can also get the target using our item parameter we specified in the original callback function
        // these return the same result and you can use either in this situation
        // we default to e.target because we don't always cycle through 
        // if we don't cycle, then we don't always have the parameter from a parent callback function
        // also e.target can help with event delegation that we'll see later
        console.log(item);
        // here we are accessing the innerText
        console.log(`you clicked ${item.innerText} on the list`);
        // again we can use e.target here as well
        console.log(`you clicked ${e.target.innerText} on the list`);
        // finally we are displaying feedback to the user when they click the item
        // originally we were just switching the css style to line-through, but I wanted repeated feedback
        // remember that an empty string is falsey so we need a !=
        if (e.target.style.textDecoration != '') {
            e.target.style.textDecoration = ''
        } else {
            e.target.style.textDecoration = 'line-through';
        }; 
    });
});