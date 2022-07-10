// regular function
const calcAreaOriginal = function(radius) {
    return 3.14 * radius**2;
};

const areaOriginal = calcAreaOriginal(5);
console.log(`the area is ${areaOriginal}`);

// arrow function
// first we can remove the function keyword and add the arrow
const calcArea1 = (radius) => {
    return 3.14 * radius**2;
};
const area1 = calcArea1(5);
console.log(`the area is ${area1}`);

// when there is only one parameter we can remove the ()
// if there is none or more than one we still keep the ()
const calcArea2 = radius => {
    return 3.14 * radius**2;
};
const area2 = calcArea2(5);
console.log(`the area is ${area2}`);

// when there is a simple return line we can remove return and scoot the code block up to the first line
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(`the area is ${area}`);

// practice converting regular to arrow
const greetReg = function () {
    return 'hello world';
};

const greet = () => 'hello world';

const billReg = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
         total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(billReg([10,15,30],0.2));

const bill = (products,tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30],0.2));