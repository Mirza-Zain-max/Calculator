//InputDisplay
const display = document.getElementById("inputDisplay");

//appenToDisplay
function appenToDisplay(input) {
    inputDisplay.value += input;
}
//clearDisplay()
function clearDisplay() {
    document.getElementById("inputDisplay").value = "";
}
//calculate()]
function calculate() {
    // inputDisplay.value = eval(inputDisplay.value);
    try {
        inputDisplay.value = eval(inputDisplay.value);
    } catch (error) {
        inputDisplay.value = 'Bandy Da Puttar Ban😂'
    }
}