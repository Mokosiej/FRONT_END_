
function reverseWords(str) {
    
    let wordsArray = str.split(' ');

    let reversedArray = wordsArray.reverse();

    return reversedArray.join(' ');
}

// Пример использования
console.log(reverseWords("Hello world this is a test"));

function reverseWords(str) {
    
    let cleanedStr = str.replace(/[^\w\s]/g, '');

    return cleanedStr.split(' ').reverse().join(' ');
}

// Пример использования
console.log(reverseWords("Hello, world! This is a test."));
