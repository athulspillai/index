import React from 'react';

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Get all prime numbers from 1 to 10
const primes = [];
// Get all odd numbers from 1 to 10
const odds = [];
for (let i = 1; i <= 10; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
    if (i % 2 !== 0) {
        odds.push(i);
    }
}

function Subcategory() {
    return (
        <div>
            <p style={{ fontSize: '0.5rem' }}>Prime Numbers from 1 to 10</p>
            <ul>
                {primes.map((prime, index) => (
                    <li key={index}>{prime}</li>
                ))}
            </ul>
            <h1  style={{ fontSize: '0.5rem' }}>Odd Numbers from 1 to 10</h1>
            <ul>
                {odds.map((odd, index) => (
                    <li key={index}>{odd}</li>
                ))}
            </ul>
        </div>
    );
}

export default Subcategory;

