const inputArea = document.getElementById('validation-input');

inputArea.addEventListener('blur', () => {
    if (inputArea.value.length == inputArea.getAttribute('data-length')) {
        if (inputArea.classList.contains('invalid')) {
            inputArea.classList.remove('invalid');
        }
        inputArea.classList.add('valid');
    } else {
        if (inputArea.classList.contains('valid')) {
            inputArea.classList.remove('valid');
        }
        inputArea.classList.add('invalid');
    }
});
