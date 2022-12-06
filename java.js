const buttonUp = document.getElementById('increase');
const buttonDown = document.getElementById('decrease');
const buttonReset = document.getElementById('reset');
const displayNumber = document.getElementById('counter-display');
const secretMsg = document.querySelector('.secret-msg');

let counter = 0;

buttonUp.addEventListener('click', () => {
    counter++;
    displayNumber.textContent = counter;
    console.log(counter)
    if (counter === 1000) {
        setInterval(() => {
            secretMsg.textContent = 'CONGRATULATIONS YOU WON!';
            secretMsg.style.color = generateRandomColor()
        }, 150);
    }
})

buttonDown.addEventListener('click', () => {
    counter--;
    displayNumber.textContent = counter;
})

buttonReset.addEventListener('click', () => {
    counter = 0;
    displayNumber.textContent = counter;
})


function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    backgroundColorText = 'RGB background(' + r + ',' + g + ',' + b + ')';
    return backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}