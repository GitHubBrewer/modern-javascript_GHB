// in addition to innerText and innerHTML we can also manipulate attributes
// here we grab the anchor tag
const link = document.querySelector('a');

// now we can get and set Attributes like the href that points the link to a site/file
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'the net ninja website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
// here we update the class from error to success
mssg.setAttribute('class', 'success');
// here we insert a new attribute to change the font color
mssg.setAttribute('style', 'color: green;');
