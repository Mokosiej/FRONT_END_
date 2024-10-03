
let array = [1, 2, 3, 4, 5];


function reverseArray(arr) {
    let newArray = [];


    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }

    return newArray;
}

let reversedArray = reverseArray(array);
console.log("Перевернутый массив:", reversedArray);
