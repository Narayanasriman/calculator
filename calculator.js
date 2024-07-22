function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

Math.cosec = function(x) {
    return 1 / Math.sin(x);
}

Math.sec = function(x) {
    return 1 / Math.cos(x);
}

Math.cot = function(x) {
    return 1 / Math.tan(x);
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "ERROR";
    }
}

function backspace() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
