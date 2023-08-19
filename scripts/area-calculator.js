function calculatorTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);


    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);


    const area = .5 * height * base;

    const triangleSpan = document.getElementById('triangle-area');
    triangleSpan.innerText = area;
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);


    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area;

}


function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = (Math.PI) * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
}


function calculateRhombusArea() {
    const firstDiagonals = getInputValue('first-diagonals');
    const secondDiagonals = getInputValue('second-diagonals');
    const area = 0.5 * firstDiagonals * secondDiagonals;
    setElementInnerText('rhombus-area', area);
}

function calculatePentagonArea() {
    const perimeter = getInputValue('perimeter');
    const apothem = getInputValue('apothem');
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area',area);

}
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}


function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}