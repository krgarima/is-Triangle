const inputForm = document.querySelector('.formInput');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('#finalScore')
const quizAnswer = ["45", "obtuse"];

function calculateScore() {
    const formResults = new FormData(inputForm);
    let score = 0, index = 0, number=0;
    for (let value of formResults.values()) {
        console.log(quizAnswer[index]);
        if (value === quizAnswer[index])
            score = score + 1;
        index = index + 1;
        number = number + 1;
    }
    if(number === 2)
    {
        result.innerText = "Result: Your score is " + score;
        result.style.color = "green";
    }
    else
    {
        result.innerText = "Please provide all inputs";
        result.style.color = "red";
    }
}

submitBtn.addEventListener("click", calculateScore);