
function getObjectTypes(obj) {
    
    if (typeof obj !== 'object' || obj === null) {
        return {}; 
    }

    const keys = Object.keys(obj);
    const result = {}; 

    keys.map(key => {
        result[key] = typeof obj[key]; 
    });

    return result; 
}

// Примеры использования
const exampleObject = {
    name: 'Alice',
    age: 25,
    isAdmin: true,
    scores: [100, 90, 85],
    details: null,
    address: { city: 'Wonderland' },
};

console.log(getObjectTypes(exampleObject));

