let buffer = "0";
// let screenNumber = screen.innerText;

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
            break;
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