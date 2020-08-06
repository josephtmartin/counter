'use strict';

let counterValue = 0;

const buildCounter = () => {
  let domString = `<div class="counter--card">
                        <h3 class="counter--header">Counter</h3>
                        <div class="counter--value">${counterValue}</div>
                        <div class="counter--buttons">
                            <button id="decrease">Decrease</button>
                            <button id="reset">Reset</button>
                            <button id="increase">Increase</button>
                        </div>
                    </div>`;

  printToDom('counterContainer', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const changeColor = () => {
    if (counterValue === 0) {
        document.querySelector('.counter--value').style.color = '#DAA588';
    } else if (counterValue < 0) {
        document.querySelector('.counter--value').style.color = '#F56960';
    } else if (counterValue > 0) {
        document.querySelector('.counter--value').style.color = '#9DCBBA';
    }
}

const decreaseCounter = () => {
    counterValue -= 1;
    init();
}

const increaseCounter = () => {
    counterValue += 1;
    init();
}

const resetCounter = () => {
    counterValue = 0;
    init();
}

const buttonEvent = () => {
    document.querySelector('#decrease').addEventListener('click', decreaseCounter);
    document.querySelector('#increase').addEventListener('click', increaseCounter);
    document.querySelector('#reset').addEventListener('click', resetCounter);
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();
