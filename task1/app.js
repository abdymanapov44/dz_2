let count = 0;
function updateDisplay(color) {
  const counter = document.getElementById("counter");
  counter.textContent = count;
  counter.style.color = color;
}

function increment() {
  count++;
  updateDisplay("green");
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay("red");
  }
}
