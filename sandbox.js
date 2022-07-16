// lets add and remove classes
// grab the h2 tag
const content = document.querySelector('h2');
// we can get a  DOMTokenList using the classList property
console.log(content.classList);
// we can add a class
content.classList.add('error');
// remove the class
content.classList.remove('error');
// add a different class
content.classList.add('success');
// add another class
content.classList.add('test');

// now lets apply a class based on the text in the p tag
// grab all the p tags
const paras = document.querySelectorAll('p');

// now check to see if the text contains error or success and add the corresponding class
paras.forEach(para => {
   if (para.innerText.includes('error')) {
    para.setAttribute('class', 'error');
   } else if (para.innerText.includes('success')) {
    para.setAttribute('class', 'success');
   };
});
// could also use para.textContent to grab all text even if set to hidden
// could use classList.add instead if you want to ensure you don't overwrite other existing classes

// we can also toggle classes on/off with the toggle method
const title = document.querySelector('.title');
// checks to see if the class is there and adds/removes based on what it finds
title.classList.toggle('test');

title.classList.toggle('test');
