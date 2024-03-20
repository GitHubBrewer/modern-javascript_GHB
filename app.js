// here we store the correct answers in an array
const correctAnswers = ['B', 'B', 'B', 'B'];
// this lets us access the entire quiz form
const form = document.querySelector('.quiz-form');
// I will use this to access the result section to remove the d-none class after submit
const result = document.querySelector('.result');
// I will use this to change the score in the result section after submit
const finalScore = document.querySelector('span');

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
    console.log(score);
    // I initially tried to toggle the class, but that lead to hiding it again if I update my answers and resubmit
    result.classList.remove('d-none');
    // I initially though I needed to format as finalScore.innerText(template string) but errored out
    finalScore.innerText = `${score}%`;
});