function writeNum (num) {
    myform.answer.value += num;
    console.log(myform.answer.value)
}

function clearAll () {
    myform.answer.value = "";
    console.log("clean")
}

function calculate () {
    myform.answer.value = eval(myform.answer.value) //NEVER USE eval()!!!
    console.log(myform.answer.value)
}