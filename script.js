function clearDisplay() {
    document.querySelector('.display input').value = '';
}


function deleteLastChar() {
    let currentDisplay = document.querySelector('.display input').value;
    document.querySelector('.display input').value = currentDisplay.slice(0, -1);
}


function handleButtonClick(value) {
    const display = document.querySelector('.display input');
    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}


document.querySelectorAll('.calculator input').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DE') {
            deleteLastChar();
        } else {
            handleButtonClick(value);
        }
    });
});
