document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    let currentInput = '';

   
    function updateDisplay() {
        display.textContent = currentInput;
    }

    
    document.querySelectorAll('.number, .operator').forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.value;
            updateDisplay();
        });
    });

   
    document.querySelector('.clear').addEventListener('click', () => {
        currentInput = '';
        updateDisplay();
    });

    
    document.querySelector('.equals').addEventListener('click', () => {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch (error) {
            currentInput = 'Erro';
            updateDisplay();
        }
    });
});
