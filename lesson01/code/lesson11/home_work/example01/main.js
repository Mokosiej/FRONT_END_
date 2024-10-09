
function arrayToObject(arr) {
    let result = {};

    arr.forEach(element => {
        
        result[element] = element;
    });

    return result;
}

// Примеры использования
console.log(arrayToObject(['apple', 42, 'banana', 100]));

console.log(arrayToObject([1, 'one', 2, 'two']));
