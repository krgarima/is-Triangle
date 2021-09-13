const inputValues = document.querySelectorAll('.inputSide');
const calculateBtn = document.querySelector("#calculateValue");
const hypotenuse = document.querySelector('#resultHypotenuse');

function calculateValue()
{
    if((Number(inputValues[0].value)&& Number(inputValues[1].value)))
    {const sumOfSq = sumOfSquares(Number(inputValues[0].value), Number(inputValues[1].value));
    const hypo = Math.sqrt(sumOfSq);
    hypotenuse.innerText = "Result is "+hypo;}
    else
    hypotenuse.innerText = "Input error: Enter values in both the fields";
}

function sumOfSquares(a,b)
{
    const result = (a*a) + (b*b);
    return result;
}
calculateBtn.addEventListener("click", calculateValue);
