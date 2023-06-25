let firstInput = document.querySelector('.Calculator-input-first')
let secondInput = document.querySelector('.Calculator-input-second')

let firstValue = firstInput.value;
let secondValue = secondInput.value;
let result = 0;

let buttonPlus = document.querySelector('.calculator-plus')
let buttonMinus = document.querySelector('.calculator-minus')
let buttonMultiply = document.querySelector('.calculator-multiply')
let buttonDivide = document.querySelector('.calculator-divide')
let buttonEquals = document.querySelector('.calculator-equals')

buttonPlus.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    result = Number(firstValue) + Number(secondValue);
})

buttonMinus.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;    
    result = Number(firstValue) - Number(secondValue);
})

buttonMultiply.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    result = Number(firstValue) * Number(secondValue);
})

buttonDivide.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    result = Number(firstValue) / Number(secondValue);
})

buttonEquals.addEventListener('click', () => {
    alert(result)
})