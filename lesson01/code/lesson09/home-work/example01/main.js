
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
}

let min = array[0];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Массив:", array);
console.log("Минимальное значение:", min);
console.log("Максимальное значение:", max);
