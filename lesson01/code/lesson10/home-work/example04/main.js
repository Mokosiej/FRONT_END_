
function isPrime(num) {
    
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

function getPrimesInRange(n) {
    let primes = [];

    for (let i = 1; i <= n; i++) {
        
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes; 
}
console.log(isPrime(7));  
console.log(isPrime(10)); 

console.log(getPrimesInRange(10)); 
console.log(getPrimesInRange(20)); 
