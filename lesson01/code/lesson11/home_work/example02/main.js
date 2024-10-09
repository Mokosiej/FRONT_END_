
function arrayPairsToObject(arr) {
    let result = {};

    
    arr.forEach(pair => {
        
        let [key, value] = pair;
        result[key] = value;
    });

    return result;
}

// Примеры использования
console.log(arrayPairsToObject([['name', 'Alice'], ['age', 25], ['job', 'developer']]));

console.log(arrayPairsToObject([['key1', 'value1'], ['key2', 'value2']]));

