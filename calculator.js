/*
let display = document.getElementById('display');
let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearScreen() {
    currentInput = '';
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    display.value = currentInput;
    function square() {
        try {
            currentInput = Math.pow(parseFloat(currentInput), 2);
            display.value = currentInput;
        } catch (e) {
            display.value = 'Error';
            currentInput = '';
        }
    }
}   
    function square() {
        try {
            currentInput = Math.pow(parseFloat(currentInput), 2);
            display.value = currentInput;
        } catch (e) {
            display.value = 'Error';
            currentInput = '';
        }
    }
    */

    let display = document.getElementById('display');
let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearScreen() {
    currentInput = '';
    display.value = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

function scientificFunction(func) {
    try {
        // Remove any unwanted characters and calculate accordingly
        if (func === 'sin') {
            currentInput = Math.sin(parseFloat(currentInput));
        } else if (func === 'cos') {
            currentInput = Math.cos(parseFloat(currentInput));
        } else if (func === 'tan') {
            currentInput = Math.tan(parseFloat(currentInput));
        } else if (func === 'sqrt') {
            currentInput = Math.sqrt(parseFloat(currentInput));
        } else if (func === 'log') {
            currentInput = Math.log(parseFloat(currentInput));
        }

        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}










// history

function calculate() {
    try {
        const result = eval(currentInput);
        display.value = result;
        
        // Save to history
        addToHistory(currentInput, result);

        currentInput = result.toString();
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

// Add this new function to handle history
function addToHistory(expression, result) {
    const historyList = document.getElementById('historyList');
    const newItem = document.createElement('li');
    newItem.textContent = expression ={result};
    historyList.prepend(newItem); // Adds newest on top
}
// nagative


function toggleHistory() {
    const container = document.getElementById('historyContainer');
    const toggleButton = document.querySelector('button[onclick="toggleHistory()"]');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggleButton.textContent = 'Hide History';
        loadHistory(); // Load history when first shown
    } else {
        container.style.display = 'none';
        toggleButton.textContent = 'Show History';
    }
}
 //window.onload = loadHistory;
 javascript
function square() {
    try {
        const number = parseFloat(currentInput); // Convert input to number
        const result = Math.pow(number, 2); // Square it
        currentInput = result.toString(); // Update currentInput
        display.value = currentInput; // Show result on screen
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}
