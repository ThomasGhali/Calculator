let num1 = 0;
let num2 = 0;
let operator = 0;
let storeResult = 0;
let equalClicked = false;

const numOperator = document.querySelector('.numbers-operators');
const input = document.querySelector('input');
const clearButton = document.querySelector('.clr');
const previousResults = document.querySelector("#notes")


clearButton.addEventListener('click', ()=> resetVariables());

input.addEventListener("keydown", function (e) {
    e.preventDefault();
});

numOperator.addEventListener('click', (event) => {
    debugger;
    if (event.target.classList.contains('num') ) {
        if(equalClicked){
            resetVariables();
        }

        if (input.value.length >= 12) return;

        const lastNumber = input.value.split(' ').pop();
        if (event.target.textContent === '.' && lastNumber.includes('.')) return;

            input.value += event.target.textContent;

        if (operator === 0) {
            num1 = parseFloat(input.value);
        } else {
            num2 = parseFloat(input.value.split(' ').pop());
        }
    } else if(event.target.classList.contains('operator')){

        if (input.value.length >= 12) return;

        if(operator !== 0 && num2 !== 0){
            operate(num1, operator, num2);
            previousResults.textContent = `${num1} ${operator} ${num2} `;
            num1 = parseFloat(input.value);
            num2 = 0;
        }
        operator = event.target.textContent;
        input.value += ` ${operator} `;
    }
    
    if (equalClicked && operator !==0){
        num1 = parseFloat(storeResult);
        equalClicked = false;
    }

    if (event.target.classList.contains('equal') && operator !== 0) {
            operate(num1, operator, num2);
            previousResults.textContent = `${num1} ${operator} ${num2} `;
            operator = 0;
            num2 = 0;
            storeResult = input.value;
            equalClicked = true;
    }

})

function resetVariables(){
    input.value = '';
    num1 = 0;
    num2 = 0;
    operator = 0;
    equalClicked = false;
    previousResults.textContent = '';
}

function add(number1, number2){
    let result = number1 + number2;
    if (Number.isInteger(result)) {
        input.value = result;
    } else {
        input.value = result.toFixed(4);
    }
}

function mutiply(number1, number2){
    let result = number1 * number2;
    if (Number.isInteger(result)) {
        input.value = result;
    } else {
        input.value = result.toFixed(4);
    }}

function divide(number1, number2){
    if (number2 === 0) {
        input.value = 'my beauty is?';
        return;
    }
    let result = number1 / number2;
    if (Number.isInteger(result)) {
        input.value = result;
    } else {
        input.value = result.toFixed(4);
    }
}

function subtract(number1, number2){
    let result = number1 - number2;
    if (Number.isInteger(result)) {
        input.value = result;
    } else {
        input.value = result.toFixed(4);
    }}

function operate(number1, symbol, number2){
    switch (symbol) {
        case '+':
            add(number1, number2);
            break;
            
        case '*':
            mutiply(number1, number2);
            break;

        case '-':
            subtract(number1, number2);
            break;

        case '/':
            divide(number1, number2);
            //if added another case, add break
    }
}
