const btnMinus = document.querySelectorAll("button") [0];
const btnPlus = document.querySelectorAll("button") [1];

let counterValue = 0;
const valueEl = document.querySelector("#value");

btnMinus.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
});

btnPlus.addEventListener(`click`, (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});


