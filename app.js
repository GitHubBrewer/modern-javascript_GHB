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
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');    
});

// window object (global object)

// the window object is the highest level object in JS, it is what everything else is acting upon
// because it is so fundamental, it is assumed everything is acting on it, so we don't need to specify, it is implied
/*
console.log('hello');
window.console.log('window hello');

console.log(document.querySelector('form'));
console.log(window.document.querySelector('form'));

alert('hello');
window.alert('hello');

setTimeout(() => {
    alert('hello ninjas');
}, 3000);
*/