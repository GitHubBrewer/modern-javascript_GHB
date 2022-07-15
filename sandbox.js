// now we can start making changes to the dom since we can reference it accurately
// let's grab the first p tag
const para = document.querySelector('p');

// we want the text inside the tag, not the whole tag
console.log(para.innerText);
// now we can change the text or append the text
para.innerText = 'ninjas are awesome!';
// para.innerText += 'ninjas are awesome!';

// or we could cycle through all the p tags and append new text
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

// we can also change the HTML
const content = document.querySelector('.content');
console.log(content.innerHTML);
// here we are appending to the HTML inside the node that has the content class
content.innerHTML += '<h2>this is new html</h2>'

// we can also pretend that we are pulling in info from a DB
const people = ['mario', 'luigi', 'yoshi'];

// now we cycle through each element in the array and append it to the node that has the content class
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});