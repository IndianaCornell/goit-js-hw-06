let counterValue = 0;

const incrementButton = document.querySelector('button[data-action="increment"]');
console.log(incrementButton);

const decrementButton = document.querySelector('button[data-action="decrement"]');
console.log(decrementButton);

const value = document.getElementById('value');
console.log(value);

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementButton.addEventListener('click', decrement);

incrementButton.addEventListener('click', increment);
