const inputValues = document.querySelectorAll('.inputSide');
const calculateBtn = document.querySelector("#calculateValue");
const Area = document.querySelector('#resultArea');

function calculateValue()
{
    if((Number(inputValues[0].value)&& Number(inputValues[1].value)))
    {const product = prodOfBH(Number(inputValues[0].value), Number(inputValues[1].value));
    const areaOfT = product/2;
    Area.innerText = "Result is "+areaOfT;}
    else
    Area.innerText = "Input error: Enter values in both the fields";
}

function prodOfBH(b,h)
{
    const result = b*h;
    return result;
}
calculateBtn.addEventListener("click", calculateValue);
