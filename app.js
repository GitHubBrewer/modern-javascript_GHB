// here we store the correct answers in an array
const correctAnswers = ['B', 'B', 'B', 'B'];
// this lets us access the entire quiz form
const form = document.querySelector('.quiz-form');
// I will use this to access the result section to remove the d-none class after submit
const result = document.querySelector('.result');

// here we listen for the submit action
form.addEventListener('submit', e => {
    // prevent the default action of refreshing the page after submit
    e.preventDefault();

    // initialize the score at 0
    let score = 0;
    // capture the answers the user submitted
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');   
    
    // animate the score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);    
});

// to animate the score we are going to use a new function
/*
we saw that we can use setTimeout to wait for a period and do a thing
setTimout(() => {
    do some stuff;
}, 3000);

if we want to do that repeatedly every x miliseconds we will use setInterval
setInterval(() => {
    do the thing;
}, 1000);

if we want to break out of the function we need to assign the function to a const so we can clearInterval inside it
let i = 0;
const timer = setInterval(() => {
    console.log('hello');
    i++;
    if(i === 5){
        clearInterval(timer);
    }
}, 1000);
*/