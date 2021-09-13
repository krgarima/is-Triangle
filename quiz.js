const inputForm = document.querySelector('.formInput');
const submitBtn = document.querySelector('#submit');
const result = document.querySelector('#finalScore')

const quizAnswer = ["45°", "obtuse"];

function calculateScore()
{
    let score = 0;
    let index = 0;
    const formResult = new FormData(inputForm);
    for(let value of formResult.values())
    {
        if(value === quizAnswer[index])
        score = score+1;
        index= index+1;
    }
    result.innerText = "Result: Your score is "+score;
}

submitBtn.addEventListener("click", calculateScore);