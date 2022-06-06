const startCard = document.getElementById('start-text');
const daysCard = document.getElementById('days-text');
const cupsCard = document.getElementById('cups-text');
const resultCard = document.getElementById('result-text');

const startButton = document.getElementById('get-started');
const nextFromDaysButton = document.getElementById('next-from-days');
const nextFromCupsButton = document.getElementById('next-from-cups');
const nextFromResultButton = document.getElementById('next-from-result');

const threeDaysButton = document.getElementById('three-days');
const fourDaysButton = document.getElementById('four-days');
const fiveDaysButton = document.getElementById('five-days');
const smallCupsButton = document.getElementById('small-cup');
const largeCupsButton = document.getElementById('large-cup');

const coffeeResult = document.getElementById('coffee-calc');
const waterResult = document.getElementById('water-calc');

startButton.addEventListener('click', () => {
    startCard.style.display = "none";
    daysCard.style.display = "block";
});

nextFromDaysButton.addEventListener('click', () => {
    daysCard.style.display = "none";
    cupsCard.style.display = "block";
});

nextFromCupsButton.addEventListener('click', () => {
    cupsCard.style.display = "none";
    resultCard.style.display = "block";
});

// nextFromResultButton.addEventListener('click', () => {});