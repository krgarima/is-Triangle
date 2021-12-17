const inputValues = document.querySelectorAll('.inputSide');
const calculateBtn = document.querySelector("#calculateValue");
const hypotenuse = document.querySelector('#resultHypotenuse');

function calculateValue() {
    if ((Number(inputValues[0].value) && Number(inputValues[1].value))) {
        if (((Number(inputValues[0].value)) > 0) && ((Number(inputValues[1].value)) > 0)) {
            const sumOfSq = sumOfSquares(Number(inputValues[0].value), Number(inputValues[1].value));
            const hypo = Math.sqrt(sumOfSq);
            hypotenuse.innerText = "Result is " + hypo + " cm";
            output.style.color = "green";
        } else {
            hypotenuse.innerText = "Negative value entered!";
            output.style.color = "red";
        }
    } else {
        hypotenuse.innerText = "Input error: Enter value in both the fields";
        output.style.color = "red";
    }
}

function sumOfSquares(a, b) {
    const result = (a * a) + (b * b);
    return result;
}
calculateBtn.addEventListener("click", calculateValue);