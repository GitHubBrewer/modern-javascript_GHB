// returning values
// we are currently only returning information into the console
// how do we return a value we can do something with?

// let's start by creating a constant that is a function that calulates the area of a circle
const wrongCalcArea = function(radius){
    let wrongArea = 3.14 * radius**2;
    console.log(wrongArea);
};

// this lets us return a value, but we can't do anything with it
wrongCalcArea(5);
// nothing shows in the console even though we're passing an argument into the function

// this next line breaks the page so uncomment to see what it does, but re-comment to see the rest of the work
// console.log(wrongArea);
// wrongArea is a local-scope variable, not global, so we can't use it outside the function

// let's try again and instead of outputing the value into the console
// use return so we can try and use the value for something
const fullCalcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

// now we still can't just grab area since it's still local-scope
// instead we create a const that calls the function with a parameter we pass in
const fullArea = fullCalcArea(5);
console.log(fullArea);

// we can clean up the function a little more
// we don't need to return the value as a local variable, we can just return the output of the function
const calcArea = function(radius){
    return 3.14 * radius**2;
};

// we get the same results as above
const area = calcArea(5);
console.log(area);

// now we can use the first fuction to do more work, like calculate the volume of a cylinder
// we can also pass in default values for the parameters like we saw in the last lesson
const calcVol = function(height = 1){
  return height * area;  
};

// returns the value of h * pi * r**2 where r = 5 and h is passed in as 2
console.log(calcVol(2));

// can I return that information using a template string?
console.log(`the volume of a cylinder with a radius of 5 and height of ${calcVol.height} is `,calcVol(2));

// can I return any of this in a template string?
console.log(area.radius);
calcVol(2);
console.log(`the volume of a cylinder with a radius of ${calcArea.radius} and height of ${calcVol.height} is `,calcVol(2));
console.log(calcVol(5));