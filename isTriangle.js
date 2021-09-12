const inputs = document.querySelectorAll('.angle-input');
const isTriangleButton = document.querySelector('#is-Triangle-Btn');
const outputE1 = document.querySelector('#output');

isTriangleButton.addEventListener("click", isTriangle);

function isTriangle() {
    const sum = calculateSumOfAngles();
    if (sum === 180)
        outputE1.innerText = "Voila! The angles form a triangle.";
    else
        outputE1.innerText = "Not a triangle.";
}

function calculateSumOfAngles() {
    const sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    return sum;
}