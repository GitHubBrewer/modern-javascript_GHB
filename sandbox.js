// other ways to query the DOM

// get an element by ID which is an element attribute
// IDs should be unique by convention, but that isn't a guarantee
// you also don't need to use the .class since it is implied we are selecting by Id with this method
const title = document.getElementById('page-title');
console.log(title);

// get an element by their class name, another element attribute
const errors = document.getElementsByClassName('error');
// note that this returns an HTML collection instead of a node list
// https://www.w3schools.com/js/js_htmldom_collections.asp
// https://www.w3schools.com/js/js_htmldom_nodelist.asp
console.log(errors);
// we can still select a given element within using []
console.log(errors[1]);
// we can't use the forEach method on it though
/* 
errors.forEach(error => {
    console.log(error);
});
*/
// instead you could use the length property to cycle through using a for loop
const errorsList = error => {
    for (let i = 0; i < errors.length; i++){
        console.log(errors[i].innerHTML);
    }
};
// then invoke your function
errorsList(errors);
// get an element by their tag name
const paras = document.getElementsByTagName('p');
// also returns an html collection
console.log(paras);
console.log(paras[0]);

// both querySelector & getElements work to reference the DOM
// querySelector is usually easier and more flexible
// we could still use forEach and other methods on get Elements, but would have to convert it to an array first

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