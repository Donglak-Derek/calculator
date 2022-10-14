
function buttonClick () {
    console.log("button clicked")
}

function init() {
    const buttons = 
    document.
    querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    })
}



init ();