let buffer = "0";


function handleSymbol (symbol) {
    console.log(symbol);
}

function handleNumber (number) {
    console.log(number);
}

function buttonClick (value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
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
}

//reder number

function rerendering () {
    document.querySelector(".screen").innerText = buffer;
}
// should init init function
init ();