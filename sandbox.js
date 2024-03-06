// in addition to innerText and innerHTML we can also manipulate attributes
// here we grab the anchor tag
const link = document.querySelector('a');

// now we can get and set Attributes like the href that points the link to a site/file
// we'll use the getAttribute method and pass in href as the argument
console.log(link.getAttribute('href'));

// to change it we use the setAttribute method and it takes in two arguments
// the attribue we want to change, and what we want to change/set it to
link.setAttribute('href', 'https://www.thenetninja.co.uk');

// her we change the innerText property of our link const
link.innerText = 'the net ninja website';

// now we are going to grab the first p tag
const mssg = document.querySelector('p');

// log out the value of the class attribute
console.log(mssg.getAttribute('class'));

// here we update the class from error to success
mssg.setAttribute('class', 'success');

// we don't need to change existing classes only, we can also add an attribute
// here we insert a new attribute to change the font color with the style attribute
mssg.setAttribute('style', 'color: green;');
