// Document Object Model (DOM)

// in order to affect the DOM we need a way to reference things within it
// we can query the dom with these methods

// this queries the first instand of a p tag
const para = document.querySelector('p');
console.log(para);

// this queries the first instance of any tag with an error class
const paraError = document.querySelector('.error');
console.log(paraError);

// this queries the first instance of a div tag with the error class
const divError = document.querySelector('div.error');
console.log(divError);

// we can also query multiple items this way
// this queries all p tags (remember to use plural names for multi-items)
const paras = document.querySelectorAll('p');
console.log(paras);

// it returns a NodeList that looks like an array but isn't
// we can select specific items from the list with []
console.log(paras[2]);

// we can also use methods on it, though not all methods
paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

errors.forEach(error => {
    console.log(error);
});