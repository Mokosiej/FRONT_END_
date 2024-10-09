
function areObjectsEqual(obj1, obj2) {
    
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false; 
        }
    }

    return true; 
}

// Примеры использования
console.log(areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1 }));        // false
console.log(areObjectsEqual({ a: 1 }, { a: 1, b: 2 }));        // false
console.log(areObjectsEqual(null, { a: 1 }));                  // false
