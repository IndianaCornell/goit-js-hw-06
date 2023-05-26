function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeButton = document.querySelector('button.change-color');
const body = document.querySelector('body');
const color = document.querySelector('span.color');

changeButton.addEventListener('click', event => {
    body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
});
