// other ways to query the DOM

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get an element by their class name
const errors = document.getElementsByClassName('error');
// note that this returns an HTML collection instead of a node list
console.log(errors);
// we can still select a given element within using []
console.log(errors[1]);
// we can't use the forEach method on it though
// errors.forEach(error => {
//     console.log(error);
// });

// get an element by their tag name
const paras = document.getElementsByTagName('p');
// also returns an html collection
console.log(paras);
console.log(paras[0]);

// both querySelector & getElements work to reference the DOM
// querySelector is usually easier and more flexible
// we could still use forEach and other methods on get Elements, but wou;d have to convert it to an array first

// methods allowed by each
    // HTML collections
        // .item()
        // .namedItem()
    // Node List
        // .item()
        // .entries()
        // .forEach()
        // .keys()
        // .values()