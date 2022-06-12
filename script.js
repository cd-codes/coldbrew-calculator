const startCard = document.getElementById('start-text');
const daysCard = document.getElementById('days-text');
const cupsCard = document.getElementById('cups-text');
const resultCard = document.getElementById('result-text');
const instructionsCard = document.getElementById('instructions-text');

const startButton = document.getElementById('get-started');
const nextFromDaysButton = document.getElementById('next-from-days');
const nextFromCupsButton = document.getElementById('next-from-cups');
const nextFromResultButton = document.getElementById('next-from-result');
const returnToStartButton = document.getElementById('return-to-start');

const threeDaysButton = document.getElementById('three-days');
const fourDaysButton = document.getElementById('four-days');
const fiveDaysButton = document.getElementById('five-days');
const smallCupsButton = document.getElementById('small-cup');
const largeCupsButton = document.getElementById('large-cup');

const coffeeResult = document.getElementById('coffee-calc');
const waterResult = document.getElementById('water-calc');
const concentrateResult = document.getElementById('half-cup-size');

const smallCupsOz = 8;
const largeCupsOz = 16;
let daysSelected = 3;
let cupSizeSelected = 1;
let totalWater = 0;

startButton.addEventListener('click', () => {
    startCard.style.display = "none";
    daysCard.style.display = "block";
});

nextFromResultButton.addEventListener('click', () => {
    resultCard.style.display = "none";
    instructionsCard.style.display = "block";
});

returnToStartButton.addEventListener('click', () => {
    instructionsCard.style.display = "none";
    startCard.style.display = "block";
    removeHighlight(threeDaysButton);
    removeHighlight(fourDaysButton);
    removeHighlight(fiveDaysButton);
    removeHighlight(smallCupsButton);
    removeHighlight(largeCupsButton);
    addUnavailable(nextFromDaysButton);
    addUnavailable(nextFromCupsButton);
    deactivateNextFromDays();
    deactivateNextFromCups();
})

threeDaysButton.addEventListener('click', (e) => {
    addHighlight(e);
    removeHighlight(fourDaysButton);
    removeHighlight(fiveDaysButton);
    removeUnavailable(nextFromDaysButton);
    daysSelected = 3;
    activateNextFromDays();
})

fourDaysButton.addEventListener('click', (e) => {
    addHighlight(e);
    removeHighlight(threeDaysButton);
    removeHighlight(fiveDaysButton);
    removeUnavailable(nextFromDaysButton);
    daysSelected = 4;
    activateNextFromDays();
})

fiveDaysButton.addEventListener('click', (e) => {
    addHighlight(e);
    removeHighlight(threeDaysButton);
    removeHighlight(fourDaysButton);
    removeUnavailable(nextFromDaysButton);
    daysSelected = 5;
    activateNextFromDays();
})

smallCupsButton.addEventListener('click', (e) => {
    addHighlight(e);
    removeHighlight(largeCupsButton);
    removeUnavailable(nextFromCupsButton);
    cupSizeSelected = 1;
    activateNextFromCups();
})

largeCupsButton.addEventListener('click', (e) => {
    addHighlight(e);
    removeHighlight(smallCupsButton);
    removeUnavailable(nextFromCupsButton);
    cupSizeSelected = 2;
    activateNextFromCups();
})



function activateNextFromDays() {
    nextFromDaysButton.addEventListener('click', handleNextFromDays);
}

function activateNextFromCups() {
    nextFromCupsButton.addEventListener('click', handleNextFromCups);
}

function deactivateNextFromDays() {
    nextFromDaysButton.removeEventListener('click', handleNextFromDays);
}

function deactivateNextFromCups() {
    nextFromCupsButton.removeEventListener('click', handleNextFromCups);
}

function handleNextFromDays() {
    daysCard.style.display = "none";
    cupsCard.style.display = "block";
}

function handleNextFromCups() {
    cupsCard.style.display = "none";
    resultCard.style.display = "block";
    updateWaterResult();
    updateCoffeeResult();
    updateConcentrateResult();
}

function addHighlight(event) {
    event.target.classList.add("selected");
}

function removeHighlight(button) {
    button.classList.remove("selected");
}

function addUnavailable(button) {
    button.classList.add("unavailable");
}

function removeUnavailable(button) {
    button.classList.remove("unavailable");
}

function updateConcentrateResult() {
    if(smallCupsButton.classList.contains("selected")) {
        concentrateResult.innerText = "4 oz";
    } else {
        concentrateResult.innerText = "8 oz";
    }
}

function updateWaterResult() {
    totalWater = daysSelected * cupSizeSelected;
    waterResult.innerText = `${totalWater} cups`;
}

function updateCoffeeResult() {
    let totalCoffee = totalWater / 4;
    coffeeResult.innerText = `${totalCoffee} cup${totalCoffee == 1 ? "" : "s"}`;
}