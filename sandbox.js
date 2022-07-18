// we need a way to continue listening for events when new elements are added
// first we need to understand event bubbling
// i've added logging for when an event is triggered in the li and the ul
// we find that triggering th li event also triggers the ul event
// events bubble up through the heirarchy
const items = document.querySelectorAll('li');
// commented the belowout to move the listen/action to the parent
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//         console.log('event in LI');
//         // we can stop the bubbling with the stopPropagation method
//         e.stopPropagation();
//     });
// });
// this still doesn't solve our issue of not listening to new tags when they're added
// for this we need event delegation
// this uses the bubbling to pass the target up to parents where it can be accessed
// this lets us perform the eventListen at a higher level and receive events from lower levels
// then we take the target passed up and perform the desired action
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'something new';
    ul.prepend(newLi);
});
// moving the listen up to the parent
ul.addEventListener('click', e => {
    console.log('event in UL');
    // determining if the event was from the LI
    if (e.target.tagName === 'LI') {
        // performing the remove
        e.target.remove();
    }
});