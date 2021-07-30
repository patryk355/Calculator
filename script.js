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
const signOfOperation = document.querySelector('.sign-of-operation');
const currentResult = document.querySelector('.current-result');

let result = 0;
let typeOfOperation;
let endOperation = false;

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

// Events on buttons except figures
clear.addEventListener('click', clearResult);
clearEntry.addEventListener('click', clearLastResult);
undo.addEventListener('click', removeLastSign);
percent.addEventListener('click', percentOfNumber);
reciprocal.addEventListener('click', reciprocalOfNumber);
escalate.addEventListener('click', escalateNumber);
squareRoot.addEventListener('click', squareRootBtn);
divide.addEventListener('click', divideNumber);
equal.addEventListener('click', amountTo);
multiply.addEventListener('click', multiplyNumber);
subtract.addEventListener('click', difference);
add.addEventListener('click', sum);
plusOrMinus.addEventListener('click', changeSign);
comma.addEventListener('click', addComma);

// Result 
function addNumber(e) {
    result = parseFloat(e.target.textContent);
    if (endOperation == true) {
        currentResult.textContent = 0;
        currentResult.textContent = result;
        endOperation = false;
    } else {
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

}

// C btn
function clearResult() {
    record.textContent = '';
    currentResult.textContent = 0;
}

// CE btn
function clearLastResult() {
    currentResult.textContent = 0;
}

// Undo btn
function removeLastSign() {
    if (currentResult.textContent == 0) return;
    else if (currentResult.textContent != 0) {
        currentResult.textContent /= 10;
        currentResult.textContent = parseInt(currentResult.textContent);
    }
}

// Percent btn 
function percentOfNumber() {
    if (currentResult.textContent <= 0) return;
    else {
        currentResult.textContent /= 100;
    }
}

// Reciprocal btn
function reciprocalOfNumber() {
    currentResult.textContent = 1 / currentResult.textContent;
}

// Escalate btn 
function escalateNumber() {
    currentResult.textContent *= currentResult.textContent;
}

// Square root btn
function squareRootBtn() {
    if (currentResult.textContent < 0) {
        currentResult.textContent = `ERROR`;
    } else {
        currentResult.textContent = Math.sqrt(currentResult.textContent);
    }
}

// Divide btn
function divideNumber() {
    record.textContent = currentResult.textContent;
    signOfOperation.innerHTML = ` <i class="fas fa-divide"></i>`;
    // currentResult.textContent = 0;
    endOperation = true;
    return typeOfOperation = 'divide';
}

// Multiply btn
function multiplyNumber() {
    record.textContent = currentResult.textContent;
    signOfOperation.textContent = ' x';
    // currentResult.textContent = 0;
    endOperation = true;
    return typeOfOperation = 'multiply';
}

// Subtract btn 
function difference() {
    record.textContent = currentResult.textContent;
    signOfOperation.textContent = ' -';
    // currentResult.textContent = 0;
    endOperation = true;
    return typeOfOperation = 'difference';
}

// Add btn 
function sum() {
    record.textContent = currentResult.textContent;
    signOfOperation.textContent = ' +';
    // currentResult.textContent = 0;
    endOperation = true;
    return typeOfOperation = 'sum';
}

// Equal btn 
function amountTo() {
    switch (typeOfOperation) {
        case 'divide':
            if (currentResult.textContent == 0) currentResult.textContent = 'Cannot be divided by zero';
            else {
                currentResult.textContent = record.textContent / currentResult.textContent;
            }
            record.textContent = null;
            signOfOperation.textContent = null;
            endOperation = true;
            break;
        case 'multiply':
            currentResult.textContent = record.textContent * currentResult.textContent;
            record.textContent = null;
            signOfOperation.textContent = null;
            endOperation = true;
            break;
        case 'difference':
            currentResult.textContent = record.textContent - currentResult.textContent;
            record.textContent = null;
            signOfOperation.textContent = null;
            endOperation = true;
            break;
        case 'sum':
            currentResult.textContent = parseFloat(record.textContent) + parseFloat(currentResult.textContent);
            record.textContent = null;
            signOfOperation.textContent = null;
            endOperation = true;
            break;
        default:
            break;
    }
}

// Plus or minus btn
function changeSign() {
    currentResult.textContent *= -1;
}

// Comma btn
function addComma() {
    if (currentResult.textContent.indexOf('.') != -1) return;
    else {
        currentResult.textContent += '.';
    }
}