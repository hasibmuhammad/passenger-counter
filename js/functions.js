// Get data from the localStorage
const getDataFromLocal = (token) => {
    const count = document.getElementById('passenger-count');

    let data = JSON.parse(localStorage.getItem(token));

    if( data !== null ) {
        count.innerText = data.count;
    }
}


// Save to localstorage
const saveTolocal = (curr) => {
    const obj = {
        count: curr
    }
    localStorage.setItem('passenger-count', JSON.stringify(obj));
}

// Increment the counter
const increment = () => {
    const count = document.getElementById('passenger-count');
    
    let curr = parseInt(count.innerText);
    curr += 1;
    count.innerText = curr;

    saveTolocal(curr);
}

// Reset the counter
const reset = () => {
    const count = document.getElementById('passenger-count');
    localStorage.removeItem('passenger-count');

    count.innerText = 0;
}

export {getDataFromLocal, increment, reset}