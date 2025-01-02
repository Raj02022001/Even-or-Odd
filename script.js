const inputField = document.getElementById('numberInput');
const output = document.getElementById('output');

inputField.addEventListener('input', () => {
    const value = inputField.value.trim();

    // Clear output if input is empty
    if (value === '') {
        output.textContent = '';
        return;
    }

    // Validate input
    const number = Number(value);
    if (isNaN(number)) {
        output.textContent = 'Please enter a valid number';
        output.className = 'output error';
        return;
    }

    // Handle negative numbers
    if (number < 0) {
        output.textContent = 'Enter a positive value';
        output.className = 'output error';
        return;
    }

    // Handle positive numbers
    if (number % 2 === 0) {
        output.textContent = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    } else {
        output.textContent = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    }

    output.className = 'output';
});
