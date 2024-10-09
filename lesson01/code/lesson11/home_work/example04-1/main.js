
function transformObject(obj) {
    const result = {}; 
    
    Object.keys(obj).forEach(key => {
        result[key] = {
            value: obj[key],
            type: typeof obj[key]
        };
    });

    return result; 

// Примеры использования
const exampleObject = {
    name: 'Alice',
    age: 25,
    isAdmin: true,
    scores: [100, 90, 85],
    details: null
};

console.log(transformObject(exampleObject));
}
