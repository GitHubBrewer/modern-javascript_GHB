// returning values
// begin with a function expression with a parameter of radius
const calcAreaLogged = function(radius) {
    // define variable with the calculation of a circle's area when it's radius is passed in
    let areaLogged = 3.14 * radius**2;
    // now we can log the result to the console
    console.log(areaLogged);
};

// here we call the function and pass in an argument of 5 for the radius
// we can see the result in the console
calcAreaLogged(5);
// logging it to the console in the code block above doesn't let us do anything with areaVerbose later
// areaVerbose is a local scope variable that can't be used outside the code block
// console.log(areaLogged); //un-comment this line to see

// instead we can return the area as part of the function so it can be used
const calcAreaReturned = function(radius) {
    let areaReturned = 3.14 * radius**2;
    return areaReturned;
};
// we can now call the function but event though the value is returned we need to do a little more work to show that
calcAreaReturned(6);
// we need to store the value in memory somewhere by storing it in a variable
const areaReturned = calcAreaReturned(6);
console.log(areaReturned);

// we can clean the function expression up by combining the calculation and return call in one line
const calcArea = function(radius) {
    return 3.14 * radius**2;
};
// we store the returned value in a variable
const area = calcArea(7);
// now we can use the returned value outside the block scope
console.log(area);

// we can even use it in other functions
const calcVol = function(area,height) {
    return area * height;
};

const vol = calcVol(area,5);
console.log(vol);