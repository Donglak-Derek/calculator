let buffer = "0";
let runningTotal = 0; //save running number in background
let previousOperator = null; // to track the previous operator

const screen = document.querySelector(".screen");



function buttonClick (value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber (number) {
    if (buffer === "0") {
        buffer = number;

    } else {
        buffer += number;
    }
}

function handleSymbol (symbol) {
    switch (symbol) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "=":
            console.log("equals");
            if (previousOperator === null) {
                // need do numbers to do math
                return;
            } 
            console.log("runningTotal before", runningTotal)
            flushOperation(parseInt(buffer));
            console.log("runningTotal middle", runningTotal)
            previousOperator = null;
            buffer = "" + runningTotal;
            console.log("runningTotal after", runningTotal)

            // runningTotal = 0;            
        case "÷" :
        case "×" :
        case "-" :
        case "+" :
           handleMath(symbol);
            break;

    }   
}

function handleMath (value) {
    if (buffer === "0") {
        //do nothing
        return;
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value; 
    buffer = "0"; //clearn screen
    console.log(runningTotal);
}

function flushOperation (intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

// initialize code
function init() {
    const buttons = 
    document.
    querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    })
    console.log("Hi");
}

//reder screen
function rerender() {
    screen.innerText = buffer;
}

// should init init function
init ();