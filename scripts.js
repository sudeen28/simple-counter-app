const result = document.querySelector('.result');
const reset = document.querySelector('.res');
const decrease = document.querySelector('.dec');
const increase = document.querySelector('.inc');
const display = document.querySelector('.display');
const para = document.querySelector('p');

// for increase
increase.addEventListener('click', function handleIncrease() {
    result.innerHTML++;
    handlecolorChange()
})
decrease.addEventListener('click', function handleDecrease() {
    result.innerHTML--;
    handlecolorChange()
})
reset.addEventListener('click', function handleReset() {
    result.innerHTML = 0;
    handlecolorChange()
})

// change color function
function handlecolorChange() {
    if (result.innerHTML < 0) {
        display.style.color = "red";
        para.innerHTML = 'negative number';
    } else if (result.innerHTML > 0) {
        display.style.color = 'white';
        para.innerHTML = 'Positive number';
    } else {
        display.style.color = 'black';
        para.innerHTML = 'kiki counter'
    }
}