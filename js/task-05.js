const inputEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
    if (inputEl.value) {
        output.textContent = inputEl.value;
    } else {
        output.textContent = "Anonymous";
    }
});
