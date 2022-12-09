const buttonUp = document.getElementById('increase');
const buttonDown = document.getElementById('decrease');
const buttonReset = document.getElementById('reset');
const displayNumber = document.getElementById('counter-display');
const secretMsg = document.querySelector('.secret-msg');

let counter = 0;

buttonUp.addEventListener('click', () => {
    counter++;
    displayNumber.textContent = counter;
    if (counter > 0) {
        displayNumber.style.color = 'rgba(116, 255, 116, 0.60)'
    }
})

buttonDown.addEventListener('click', () => {
    counter--;
    displayNumber.textContent = counter;
    if (counter < 0) {
        displayNumber.style.color = 'rgba(255, 81, 0, 0.60)'
    }
})

buttonReset.addEventListener('click', () => {
    counter = 0;
    displayNumber.textContent = counter;
    displayNumber.style.color = 'rgba(0, 0, 0, 0.648)';
})
