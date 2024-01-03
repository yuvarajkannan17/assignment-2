        // This script runs in the Web Worker

// Function to check if a number is prime
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// Function to count prime numbers in a given range
function countPrimesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

// Listen for messages from the main thread
self.addEventListener('message', function (e) {
    // Perform the computation
    const result = countPrimesInRange(e.data.start, e.data.end);

    // Send the result back to the main thread
    self.postMessage(result);
});
