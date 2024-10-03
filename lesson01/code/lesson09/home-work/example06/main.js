
let str = "метилпропенилендигидроксициннаменилакрилическая кислота.";

let parts = [
    "метил",
    "пропенилен",
    "дигидрокси",
    "циннаменил",
    "акрилическая",
    "кислота"
];

for (let part of parts) {
    console.log(part);
}

let cleanedStr = str.replace(/[^\w\s]/g, '');

let words = cleanedStr.split(" ");

for (let word of words) {
    console.log(word);
}
