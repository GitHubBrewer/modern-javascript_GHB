// Document Object Model (DOM)

// in order to affect the DOM we need a way to reference things within it
// we can query the dom with these methods, querySelector and querySelectorAll

// html documents are a collection of elements and nodes https://blog.webdevsimplified.com/2021-05/node-vs-element/
// this simplified diagram can help us to understand what is available to select
/*
HTML (root node)
    head (element node)
        title (text node)
    body (element node)
        h1 (text node)
        div (text node)
            p (text node)
            p (text node)
        div (text node)
*/

// this queries the first instance of a p tag
// we're using const because the element we query won't change
// document is what we're grabbing, querySelector is the method we're using on the document, p is the element
const para = document.querySelector('p');
console.log(para);

// if we want to grab the p tag that has the error calss, we can't use p since that only grabs the first instance
// the .class argument queries the first instance of ANY tag with the specified class
const paraError = document.querySelector('.error');
console.log(paraError);

// say we have multiple tags with the same class
// the tag.class queries the first instance of a specific tag with a specific class
const divError = document.querySelector('div.error');
console.log(divError);

// we can also query multiple items
// the querySelectorAll method queries all instances of the tag you put in the argument 
// remember to use plural names for variables that you expect to contain multi-items
const paras = document.querySelectorAll('p');
console.log(paras);

// since we're returning multiple nodes instead of a specific element it returns a NodeList
// NodeLists look like an array but aren't
// this is important because it means you can't use Array methods on a NodeList
// we can however loop through a NodeList and refer to specific Nodes by index with []
console.log(paras[2]);

// we can also loop through it with the forEach method, though not any other methods
paras.forEach(para => {
    console.log(para);
});

// if you're not sure how to get a specific element, you can cheat by using the dev console
// right click the page > inspect
// hover over the element you want in the inspector panel
// right-click > copy > css selector
// paste in as your argument 'body > h1:nth-child(1)'

// here I'm testing what I've learned on the error tag
const errors = document.querySelectorAll('.error');
console.log(errors);

errors.forEach(error => {
    console.log(error);
});