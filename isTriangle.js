const inputs = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-Triangle-Btn');
const output = document.querySelector('#output');

isTriangleButton.addEventListener("click", isTriangle);

function isTriangle() {
    output.style.color = "black";
    if ((Number(inputs[0].value)) && (Number(inputs[1].value)) && (Number(inputs[2].value))) {
        if ((Number(inputs[0].value) > 0) && (Number(inputs[1].value) > 0) && (Number(inputs[2].value) > 0)) {
            const sum = calculateSumOfAngles();
            if (sum === 180) {
                output.innerText = "Result: Voila! The angles form a triangle.";
                output.style.color = "green";
            } else {
                output.innerText = "Result: Not a triangle.";
                output.style.color = "red";
            }
        } else {
            output.innerText = "Value entered is Negative!";
            output.style.color = "red";
        }
    } else {
        output.innerText = "Input error: Enter value in all the fields!";
        output.style.color = "red";
    }
}

function calculateSumOfAngles() {
    const sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    return sum;
}