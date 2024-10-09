
function transformObject(obj) {
    let result = {};

    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
           
            result[key] = {
                value: obj[key],
                type: typeof obj[key]
            };
        }
    }

    return result;
}

// Примеры использования
console.log(transformObject({ name: 'Alice', age: 25, isAdmin: true }));

console.log(transformObject({ a: 1, b: 'hello', c: null, d: undefined }));
