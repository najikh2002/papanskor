// mengambil id dari html
const p1Btn = document.querySelector("#p1-button");
const p2Btn = document.querySelector("#p2-button");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const winPointOption = document.querySelector("#win-point");

// logic rules
let winPoint = 0;
let gameOver = false;

// var p1 skor
let p1Score = 0;
p1Btn.addEventListener("click", function () {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      gameOver = true;
      p1Display.style.color = "green";
    }
    if (p1Score >= 10 && p2Score >= 10) {
      if (p1Score === p2Score) {
        winPoint += 1;
      }
    }
  }
  p1Display.textContent = p1Score;
});

// var p2 skor
let p2Score = 0;
p2Btn.addEventListener("click", function () {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      gameOver = true;
    }
    if (p1Score >= 10 && p2Score >= 10) {
      if (p1Score === p2Score) {
        winPoint += 1;
        p2Display.style.color = "green";
      }
    }
  }
  p2Display.textContent = p2Score;
});

// reset
function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.style.color = "#f94f6d";
  p2Display.style.color = "#f94f6d";
}

resetBtn.addEventListener("click", reset);

// option
winPointOption.addEventListener("change", function () {
  winPoint = parseInt(winPointOption.value);
  reset();
});
