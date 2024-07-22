function convertPercentage() {
    const percentage = document.getElementById('percentageInput').value;
    const decimal = percentage / 100;
    document.getElementById('percentageOutput').innerText = `${percentage}% is ${decimal} in decimal.`;
}

function convertDecimal() {
    const decimal = document.getElementById('decimalInput').value;
    const percentage = decimal * 100;
    document.getElementById('decimalOutput').innerText = `${decimal} in decimal is ${percentage}%.`;
}

function convertMeters() {
    const meters = document.getElementById('metersInput').value;
    const centimeters = meters * 100;
    document.getElementById('metersOutput').innerText = `${meters} meters is ${centimeters} centimeters.`;
}

function convertCentimeters() {
    const centimeters = document.getElementById('centimetersInput').value;
    const meters = centimeters / 100;
    document.getElementById('centimetersOutput').innerText = `${centimeters} centimeters is ${meters} meters.`;
}

function convertInches() {
    const inches = document.getElementById('inchesInput').value;
    const feet = inches / 12;
    document.getElementById('inchesOutput').innerText = `${inches} inches is ${feet} feet.`;
}

function clearInput(inputId, outputId) {
    document.getElementById(inputId).value = '';
    document.getElementById(outputId).innerText = '';
}
