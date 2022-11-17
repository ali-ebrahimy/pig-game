'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const image = document.querySelector('.dice');
const curentScoreEl0 = document.querySelector('#current--0');
const curentScoreEl1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const totalP0 = document.querySelector('#score--0');
const totalP1 = document.querySelector('#score--1');

//condition

curentScoreEl0.textContent = 0;
curentScoreEl1.textContent = 0;
let curentscore = 0;
let activePlayer = 0;
let holdScore = [0, 0];
let playing = true;

const switchPlayer = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  curentscore = 0;
};
//functionality dic

btnRoll.addEventListener('click', function () {
  if (playing) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // image.setAttribute('src', `dice-${randomNumber}.png`);
    image.src = `dice-${randomNumber}.png`;

    //add dic

    if (randomNumber != 1) {
      curentscore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curentscore;
    } else {
      //switch
      switchPlayer();
      // document.querySelector(`#current--${activePlayer}`).textContent = 0;
    }
  }
});

// functionality hold

btnHold.addEventListener('click', function () {
  if (playing) {
    const curentLable = document.querySelector('.current-label');
    //show curent lable
    // if (activePlayer == 0) {
    //   holdScore += curentscore;
    //   document.querySelector('');
    // }
    holdScore[activePlayer] += curentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      holdScore[activePlayer];
    //check if player >=150 =>win
    if (holdScore[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector('main').classList.add('pyro');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch
      switchPlayer();
    }
    // document.querySelector(`#current--${activePlayer}`).textContent = 0;
    curentscore = 0;
  }
});

// new game

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  curentScoreEl0.textContent = 0;
  curentScoreEl1.textContent = 0;
  curentscore = 0;
  activePlayer = 0;
  holdScore = [0, 0];
  playing = true;
  totalP1.textContent = 0;
  totalP0.textContent = 0;
});
