// map method
// takes an array, iterates through it and pushes the updated value into a new array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);
console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shell', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shell', price: 50}
];

// create array that returns half price if over 30

const productSale = products.map(product => {
    if (product.price <= 30) {
        return product;
    } else {
        return {name: product.name, price: product.price / 2};
    }
});

console.log(productSale);