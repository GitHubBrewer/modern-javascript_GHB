// if we want to target all the tags under a parent we could target each in a separate cosnt
// or we could target the parent and use the child property
const article = document.querySelector('article');
console.log(article.children);
// this leaves us with an HTML collection that we can't use forEach on
// we can convert it into an array using Array.from()
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
