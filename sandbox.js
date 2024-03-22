// chaining array methods

const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

// filter out any product that is <= 20 or actually return any product > 20
const filtered = products.filter(product => product.price > 20 );
console.log(filtered);

// then take the filtered array and format the items with a sale price
const promos = filtered.map(product => {
    return {name: product.name, price: product.price / 2};
});
console.log(promos);

// now let's chain them
const chainedLong = products.filter(product => product.price > 20 ).map(product => {
    return {name: product.name, price: product.price / 2};
});
console.log(chainedLong);

// now we can clean up and format it according to convention where we indent each link in the chain
const chainedClean = products
    .filter(product => product.price > 20 )
    .map(product => {
        return {name: product.name, price: product.price / 2};
});
console.log(chainedClean);