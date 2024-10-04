
function sumEvenNumbersInRange(start, end) {
    
    let roundedStart = Math.floor(start);
    let roundedEnd = Math.floor(end);

   let sum = 0;

    for (let i = roundedStart; i <= roundedEnd; i++) {
        
        if (i % 2 === 0) {
            sum += i; 
        }
    }

    return sum;
}

// Примеры использования
console.log(sumEvenNumbersInRange(3.5, 10.8));  
console.log(sumEvenNumbersInRange(1, 5));       
console.log(sumEvenNumbersInRange(6.3, 12));    
console.log(sumEvenNumbersInRange(-5, 5));      
