
function intersection(arr1, arr2) {
    
    let set1 = new Set(arr1);

    
    let result = [...new Set(arr2.filter(num => set1.has(num)))];

    return result;
}

// Примеры использования
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));  
console.log(intersection([1, 5, 4, 2], [7, 12]));           
console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); 
