// Memory buttons
const mc = document.querySelector('.mc');
const mr = document.querySelector('.mr');
const mPlus = document.querySelector('.m-plus');
const mMinus = document.querySelector('.m-minus');
const ms = document.querySelector('.ms');
const showMemory = document.querySelector('.show-memory');

// Figure buttons
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

// Sign buttons
const percent = document.querySelector('.percent');
const clearEntry = document.querySelector('.clear-entry');
const clear = document.querySelector('.clear');
const undo = document.querySelector('.undo');
const reciprocal = document.querySelector('.reciprocal');
const escalate = document.querySelector('.escalate');
const squareRoot = document.querySelector('.square-root');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const plusOrMinus = document.querySelector('.plus-or-minus');
const comma = document.querySelector('.comma');
const equal = document.querySelector('.equal');

// Result
const record = document.querySelector('.record');
const currentResult = document.querySelector('.current-result');

let result;

// addEventListeners on figures
one.addEventListener('click', addNumber);
two.addEventListener('click', addNumber);
three.addEventListener('click', addNumber);
four.addEventListener('click', addNumber);
five.addEventListener('click', addNumber);
six.addEventListener('click', addNumber);
seven.addEventListener('click', addNumber);
eight.addEventListener('click', addNumber);
nine.addEventListener('click', addNumber);
zero.addEventListener('click', addNumber);

clear.addEventListener('click', clearResult);

function addNumber(e) {
    result = e.target.textContent;
    if ((currentResult.textContent == 0)) {
        if (result == 0) currentResult.textContent = 0;
        if (result != 0) {
            currentResult.textContent = null;
            currentResult.textContent += result;
        }
    }
    else {
        currentResult.textContent += result;
    }
}

function clearResult() {
    currentResult.textContent = 0;
}