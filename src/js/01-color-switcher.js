function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const body = document.querySelector("body")
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timer = null;
function color() {
    timer = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000);
    startBtn.setAttribute("disable", "disable")
};

function stoper() {
    startBtn.removeAttribute("disable");

};

startBtn.addEventListener("click", color);

stopBtn.addEventListener("click", stoper)