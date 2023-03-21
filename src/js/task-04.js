const counterEl = document.getElementById("value");
const decrementBtn = counterEl.previousElementSibling;
const incrementBtn = counterEl.nextElementSibling;

let counterValue = 0;

const increment = () => {
    counterValue++;
    counterEl.textContent = counterValue;

};

const decrement = () => {
    counterValue--;
    counterEl.textContent = counterValue;

};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
