
function isPalindrome(str) {
    
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

let inputStr = "А роза упала на лапу Азора";
if (isPalindrome(inputStr)) {
    console.log("Строка является палиндромом.");
} else {
    console.log("Строка не является палиндромом.");
}
