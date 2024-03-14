// we want to look at how to remove elements
const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        // we'll use the remove method on the items we're cycling through
        e.target.remove();
    });
});
// now let's look at adding elements
// let's grab the unordered list element that we want to add things to
const ul = document.querySelector('ul');
// also grab the button that we use to trigger the additions
const button = document.querySelector('button');
// listen for the button click
button.addEventListener('click', () => {
    // option 1 adds to the html directly (only allows append)
    ul.innerHTML += '<li>option 1 append something new</li>'
    // option 2 creates the element
    const newLiPre = document.createElement('li');
    newLiPre.textContent = 'option 2 something new prepended';
    // then we decide if we want to append or prepend using a method and passing in the variable we created
    ul.prepend(newLiPre);
    // you can't do both so I created a separate element for appending
    const newLiAp = document.createElement('li');
    newLiAp.textContent = 'option 3 something new appended'
    ul.append(newLiAp);
});
// note that any new li tags are not affected by the remove method above
// the eventListeners are loaded at page load and aren't applied to anything added after page load
// it also appears that the original li tags are no longer affected once new ones are added