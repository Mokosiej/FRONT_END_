
function objectValuesToString(obj) {
   
    let valuesArray = Object.values(obj);

    
    return valuesArray.join(', ');
}

// Примеры использования
console.log(objectValuesToString({ name: 'Alice', age: 25, job: 'developer' }));

console.log(objectValuesToString({ a: 1, b: 2, c: 3 }));
