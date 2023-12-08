let plus = document.querySelector('#plus');
let minus = document.querySelector('#btnMinus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let input1 = document.querySelector('#number1');
let input2 = document.querySelector('#number2');
let inputAnswer = document.querySelector('#answer');


function Plus(num1, num2) {
    return num1 + num2;
}

function Minus(num1, num2) {
    return num1 - num2;
}

function Multiply(num1, num2) {
    return num1 * num2;
}

function Divide(num1, num2) {
    return num1 / num2;
}

plus.addEventListener('click', function () {
    let num1 = +input1.value;
    let num2 = +input2.value;
    inputAnswer.value = Plus(num1, num2);
})
minus.addEventListener('click', function () {
    let num1 = +input1.value;
    let num2 = +input2.value;
    inputAnswer.value = Minus(num1, num2);
})
multiply.addEventListener('click', function () {
    let num1 = +input1.value;
    let num2 = +input2.value;
    inputAnswer.value = Multiply(num1, num2);
})
divide.addEventListener('click', function () {
    let num1 = +input1.value;
    let num2 = +input2.value;
    inputAnswer.value = Divide(num1, num2);
})












/*
function TEST1() {
    let numbere = Number(input.value);
    console.log(numbere);
}
function TEST2() {
    let numberr = Number(input.value);
    console.log(numberr);
}
*/



/*let number1 = 0;
let number2 = 0;
btn.addEventListener('click', function () {
    number1 = Number(input.value);
    console.log(number1);
})
btn1.addEventListener('click', function () {
    number2 = Number(input.value);
    console.log(number2);
})
console.log(number1);
console.log(number2);
/*
btn.addEventListener('click', TEST1)
btn.addEventListener('click', TEST2)
*/
console.log("конец")