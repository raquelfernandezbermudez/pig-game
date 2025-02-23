import "./style.css";

document.querySelector("#app").innerHTML = `
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>

`;
//
// variables de estado en JS y selectores DOMXS

// activePlayer -> variable de estado en JS
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
// score = [0,0] -> variable de estado en JS
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

// current -> variable de estado en JS
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

const imgDice = document.querySelector(".dice");

let score, currentScore, activePlayer;

const initData = () => {
  // init state variables
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  // init DOM elements

  imgDice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

initData();

btnRoll.addEventListener("click", throwDice);

function throwDice() {
  // generar un número del 1 al 6
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  // mostrar el número
  imgDice.classList.remove("hidden");
  imgDice.src = `dice-${diceNumber}.png`;
  // si no es 1....
  if (diceNumber !== 1) updateCurrentScore(diceNumber);
  else switchPlayer();
}

function updateCurrentScore(diceNumber) {
  currentScore += diceNumber; // current = current + diceNumber
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

function switchPlayer() {
  {
    // currentScore se tiene que resetear a 0 y también en el DOM!!!
    resetCurrentScore();

    // css cambiará

    sectionPlayer0.classList.toggle("player--active");
    sectionPlayer1.classList.toggle("player--active");

    // versión larga:
    // if (activePlayer === 0) {
    //   sectionPlayer0.classList.remove("player--active");
    //   sectionPlayer1.classList.add("player--active");
    // } else {
    //   sectionPlayer1.classList.remove("player--active");
    //   sectionPlayer0.classList.add("player--active");
    // }

    // activePlayer cambia de 0 a 1 ó de 1 a 0
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
}

function resetCurrentScore() {
  currentScore = 0; // current = current + diceNumber
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}


btnHold.addEventListener("click", hold);

function hold() {
  if (activePlayer === 0) {
    let newScore = parseInt(score0.textContent) + currentScore;
    score0.textContent = newScore;
    if (score0.textContent >=20){
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }else{
      switchPlayer();
    }
  } else {
    let newScore = parseInt(score1.textContent) + currentScore;
    score1.textContent = newScore;
    if (score1.textContent >=20){
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }else{
      switchPlayer();
    }
  }
  

}