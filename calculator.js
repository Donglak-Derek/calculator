let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');



function init () {
    const buttons = document.querySelector('.calc-buttons')
    buttons.addEventListener("click", function (event) {
        buffer = event.target.innerText;
console.log(buffer)
        if (buffer === "C") {
            screen.innerText = "0";
        } else if (screen.innerText === "0" && typeof(Number(buffer)) === num){
        screen.innerText = '';
        screen.innerText += buffer;
        } else if (buffer === "=") {
            Number

        } else {
            screen.innerText += buffer;   
        }
    });
}



function buttonClick(value) {
    console.log(value)
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    
}








function rerender () {
    screen.innerText = buffer;
}

init();