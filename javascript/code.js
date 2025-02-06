const display = document.getElementById('display');
const wrongSound = new Audio('assets/sounds/wrong.mp3');

function add(input) {
    if (display.value === 'WRONG!!!') {
        display.value = '';
    }
    if (display.value.length < 4) {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
}

function enter() {
    if (display.value === '1234') {
        window.location.href = 'https://riachuc4d.github.io/win';
    } else {
        display.value = 'WRONG!!!';
        wrongSound.play();
    }
}

document.getElementById('clearButton').addEventListener('click', clearDisplay);