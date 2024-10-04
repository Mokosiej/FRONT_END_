
function checkEvenOdd(num) {
    
    let roundedNum = Math.floor(num);

    if (roundedNum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// Примеры использования
console.log(checkEvenOdd(4.7));  
console.log(checkEvenOdd(3.1));  
console.log(checkEvenOdd(8));    
console.log(checkEvenOdd(-5.9)); 
