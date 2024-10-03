
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
}

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log("Массив:", array);
console.log("Сумма всех элементов массива:", sum);
