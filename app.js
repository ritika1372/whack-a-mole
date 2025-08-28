let score = 0;
let timeLeft = 30;
let currentHole = null;
let moleTimer = null;
let countdownTimer = null;

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', startGame);

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  startBtn.disabled = true;

  moleTimer = setInterval(showMole, 800);
  countdownTimer = setInterval(countdown, 1000);
}

function showMole() {
  holes.forEach(h => h.classList.remove('mole'));

  const index = Math.floor(Math.random() * holes.length);
  const moleHole = holes[index];
  moleHole.classList.add('mole');
  currentHole = moleHole;
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === currentHole && hole.classList.contains('mole')) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('mole');
      currentHole = null;
    }
  });
});

function countdown() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(moleTimer);
    clearInterval(countdownTimer);
    startBtn.disabled = false;
    alert(`⏰ Time's up! Your final score is: ${score}`);
  }
}
