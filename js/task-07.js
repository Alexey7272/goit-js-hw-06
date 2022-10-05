const conrtolEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text")

conrtolEl.addEventListener("input", () => {
     textEl.style.fontSize = conrtolEl.value + "px";
});