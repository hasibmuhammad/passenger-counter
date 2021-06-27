// import the necessary functions
import {getDataFromLocal, increment, reset} from './functions.js';

// Get the data from the localStorage
getDataFromLocal('passenger-count');

// Setting up the Increment click event
const btn = document.getElementById('increment-btn');
btn.addEventListener( 'click', () => {
    increment();
});

// Reset the counter
const resetEl = document.getElementById('reset');
resetEl.addEventListener('click', () => {
    reset();
});