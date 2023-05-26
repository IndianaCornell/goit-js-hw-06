const inputText = document.getElementById('text');
const inputSizeControl = document.getElementById('font-size-control');

inputSizeControl.addEventListener('input', event => {
    console.log(event);
    inputText.style.fontSize = `${event.target.value}px`;
});
