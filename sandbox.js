// NODE RELATIONS
// we can interact with elements/nodes, but we can also interact with nodes through relationships
// parent/child relationships move up/down the tree
// elements on the same level (have the same direct parent) are siblings
// if we want to target all the tags under a parent we could target each in a separate cosnt
// or we could target the parent and use the child property
// sometimes we won't know what the children are, as they might be dynamically generated
const article = document.querySelector('article');
console.log(article.children);
// this leaves us with an HTML collection
// we wan't to use forEach on this collection, but we can't
// we can convert it instead into an array using Array.from()
console.log(Array.from(article.children));
// this method is non-desctructive
console.log(article.children);
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

// there are many more properties available in node relationships
const title = document.querySelector('h2');
// parents is the opposite of children
console.log(title.parentElement);
// we can even chain up or down
console.log(title.parentElement.parentElement);
// we can move inside between siblings
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
// and even chain in multiple levels to access elements that we can't get to directly
console.log(title.nextElementSibling.parentElement.children);
