document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const printButton = document.getElementById('printButton');
    const output = document.getElementById('output');

    printButton.addEventListener('click', function () {
        const inputValue = textInput.value;
        output.textContent = inputValue;
    });
});
