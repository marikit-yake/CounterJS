var counter = document.getElementById("counter")


// Increments the counter by 1
function incrementCounter() {
    counter.innerHTML++;
}

// Decrements the counter by 1
function decrementCounter() {
    counter.innerHTML--;
}

// Resets the counter
function resetCounter() {
    counter.innerHTML = 0;
}