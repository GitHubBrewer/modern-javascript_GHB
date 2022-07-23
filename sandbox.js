// let's look at some other events
// we'll start wth the copy event that is triggered by highliighting something and right-clicking and selecting copy or using ctrl+c
// first we'll choose the class we want to focus on
const copyWarning = document.querySelector('.copy-me');
// now we add the event listener to it
copyWarning.addEventListener('copy', () => {
    // and set a callback function that is triggered by it
    console.log('oi, my content is copyrighted!');
});
// now we can track the movement of the mouse
// we'll select the box class
const box = document.querySelector('.box');
// we add the listener with the mousemove type to trigger it
box.addEventListener('mousemove', e => {
    // show what we can see
    // console.log(e);
    // show the values of the mouse offsets within the box class object
    // console.log(e.offsetX, e.offsetY);
    // replace the text content with what we want to display in the box
    box.textContent = `the x position is ${e.offsetX} and y position is ${e.offsetY}`
});
// finally we'll look at the wheel event
document.addEventListener('wheel', e => {
    // we can log out the position of the mouse relatvie to the visible page
    console.log(e.pageX, e.pageY);
});