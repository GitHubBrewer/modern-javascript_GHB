// here we store the correct answers in an array
const correctAnswers = ['B', 'B', 'B', 'B'];
// this lets us access the entire quiz form
const form = document.querySelector('.quiz-form');
// I will use this to access the result section to remove the d-none class after submit
const result = document.querySelector('.result');
// I will use this to change the score in the result section after submit
    // in shaun's answer this is done inside the callback function
    // I agree with this change since it protects us from other span tags that may be added later
// const finalScore = document.querySelector('span');

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
    // shaun updates the score in the span before revealing it
    // I agree that this is better to avoid displaying the result before it is updated
    // textContent is also better than innerText since it also grabs hidden text
    result.querySelector('span').textContent = `${score}%`;
    // I initially tried to toggle the class, but that lead to hiding it again if I update my answers and resubmit
    // this is unchanged
    result.classList.remove('d-none');
    // I initially though I needed to format as finalScore.innerText(template string) but errored out
        // this now occurs before removing the d-none class
    // finalScore.innerText = `${score}%`;

    // last note is that my window was large enough to see the submitted score
    // on a smaller screen the user would have to know to scroll up
    // we'll address that next
});