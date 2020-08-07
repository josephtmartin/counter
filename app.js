'use strict';

let counters = [
  {
    counterValue: 0,
    playerName: 'player'
  }
];

const buildCounter = () => {
  let domString = '';
  for (let i = 0; i < counters.length; i++) {
    domString += `<div class="counter--card">
                        <h3 class="counter--header">${counters[i].playerName}</h3>
                        <div class="counter--value value--${i}">${counters[i].counterValue}</div>
                        <div class="counter--buttons">
                            <button id="decrease-${i}">-1</button>
                            <button id="reset-${i}">Reset</button>
                            <button id="increase-${i}">+1</button>
                        </div>
                        <div class="player--button">
                            <input type="text" id="name-input-${i}" placeholder="Player/Team Name">
                            <button id="player-${i}">Submit Name</button>
                        </div>
                        <div id="remove-${i}">
                            <button id="${i}" type="button">Remove Player</button>
                        </div>
                        <div id="name-input-${i}">
                        </div>
                    </div>`;
  }
  printToDom('counterContainer', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const changeColor = () => {
  for (let i = 0; i < counters.length; i++) {
    if (counters[i].counterValue === 0) {
      document.querySelector(`.value--${i}`).style.color = '#DAA588';
    } else if (counters[i].counterValue < 0) {
      document.querySelector(`.value--${i}`).style.color = '#F56960';
    } else if (counters[i].counterValue > 0) {
      document.querySelector(`.value--${i}`).style.color = '#9DCBBA';
    }
  }
};

const decreaseCounter = (e) => {
  const target = e.target.id;
  for (let i = 0; i < counters.length; i++) {
    if (target === `decrease-${i}` && counters[i].counterValue > 0) {
      counters[i].counterValue -= 1;
    }
  }
  init();
};

const increaseCounter = (e) => {
  const target = e.target.id;
  for (let i = 0; i < counters.length; i++) {
    if (target === `increase-${i}`) {
      counters[i].counterValue += 1;
    }
  }
  init();
};

const resetCounter = (e) => {
  const target = e.target.id;
  for (let i = 0; i < counters.length; i++) {
    if (target === `reset-${i}`) {
      counters[i].counterValue = 0;
    }
  }
  init();
};

const addCounter = () => {
  counters.push({ counterValue: 0, playerName: 'player' });
  init();
};

const changeName = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `player-${i}`){
            const name = document.querySelector(`#name-input-${i}`).value;
            counters[i].playerName = name;
        }
    }
    init();
};

const removePlayer = (e) => {
    const ctype = e.target.type;
    const target = e.target.id;
    if (ctype === 'button'){
        counters.splice(target, 1);
        init();
    }
}

const buttonEvent = () => {
  for (let i = 0; i < counters.length; i++) {
    document.querySelector(`#decrease-${i}`).addEventListener('click', decreaseCounter);
    document.querySelector(`#increase-${i}`).addEventListener('click', increaseCounter);
    document.querySelector(`#reset-${i}`).addEventListener('click', resetCounter);
    document.querySelector(`#player-${i}`).addEventListener('click', changeName);
    document.querySelector(`#remove-${i}`).addEventListener('click', removePlayer);
  }
  document.querySelector('#addCounter').addEventListener('click', addCounter);
};

const init = () => {
  buildCounter();
  changeColor();
  buttonEvent();
};

init();
