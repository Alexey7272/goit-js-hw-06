function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector("button");
const textColor = document.querySelector("span")

btnColor.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = randomColor;
})