let num1Display = null;
let num2Display = null;
let resultDisplay = null;
let operatorDisplay = null;

let operator = "+";
let num1 = 0;
let num2 = 0;

document.addEventListener('DOMContentLoaded', function() {
    num1Display = document.getElementById('display-1');
    num2Display = document.getElementById('display-2');
    resultDisplay = document.getElementById('result');
    operatorDisplay = document.getElementById('operator');

    document.getElementById('num1').value = 0
    document.getElementById('num2').value = 0
})

function changeOperator(op) {
    var operators = [...document.getElementsByClassName('op')];
    operators.forEach((o, index) => {
        o.classList.remove('active');
    })

    event?.target.classList.add('active');

    operatorDisplay.textContent = op;


}

function changeDisplay1(e) {
    let val = e.target.value
    if(val.length === 0) val = 0

    num1Display.textContent = val;
}

function changeDisplay2(e) {
    let val = e.target.value
    if(val.length === 0) val = 0

    num2Display.textContent = val;
}

function getResult() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    operator = operatorDisplay.textContent;
    console.log(operator)
    let result = 0;

    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-" :
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 == 0) result = "Cannot be divided to zero"
            else result = num1 / num2;
            break;
        default: 
            console.log("'/'")
            result = "Invalid operator"
    }

    resultDisplay.textContent = result
}
