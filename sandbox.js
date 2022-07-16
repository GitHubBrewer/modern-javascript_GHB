// we've seen how to modify elements and attibutes and how to add addtributes
// how do we add additional attributes to existing ones
const title = document.querySelector('h1');
// when we try to add a margin to the style attribute that already is coloring the text orange
title.setAttribute('style', 'margin: 50px;'); 
// this has overwritten the color style attribute. 
// let's set it back to orange
title.setAttribute('style', 'color: orange;'); 
// we can actually access the individual style properties instead
// here we show all possible CSS style properties
console.log(title.style);
// now we grab just the color
console.log(title.style.color);
// now we can access just the one we want to update without affecting the others
title.style.margin = '50px';
// we can also update them directly
title.style.color = 'crimson';
// for style properties that are "double-barrel" like font-size, we remove the - and make it camel-case
title.style.fontSize = '60px';
// to remove a style property, set it to an empty string
title.style.margin = '';