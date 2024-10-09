
function objectPropertiesToTypes(obj) {
    let result = {};


    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            
            result[key] = typeof obj[key];
        }
    }

    return result;
}

// Примеры использования
console.log(objectPropertiesToTypes({ name: 'Alice', age: 25, isAdmin: true }));

console.log(objectPropertiesToTypes({ a: 1, b: 'hello', c: null, d: undefined }));
