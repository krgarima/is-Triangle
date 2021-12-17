const inputValues = document.querySelectorAll('.inputSide');
const calculateBtn = document.querySelector("#calculateValue");
const Area = document.querySelector('#resultArea');

function calculateValue() {
    if ((Number(inputValues[0].value) && Number(inputValues[1].value))) {
        if (((Number(inputValues[0].value)) > 0) && ((Number(inputValues[1].value)) > 0)) {
            const product = prodOfBH(Number(inputValues[0].value), Number(inputValues[1].value));
            const areaOfT = product / 2;
            Area.innerText = "Result is " + areaOfT + " sq. cm";
            output.style.color = "green";
        } else {
            Area.innerText = "Entered value is Negative!";
            output.style.color = "red";
        }
    } else {
        Area.innerText = "Input error: Enter value in both the fields";
        output.style.color = "red";
    }
}

function prodOfBH(b, h) {
    const result = b * h;
    return result;
}
calculateBtn.addEventListener("click", calculateValue);