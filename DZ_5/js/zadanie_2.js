function PalindromeCheck(userString) {
    let clearString = userString.toLowerCase().split(' ').join('')
    let reverseString = clearString.split('').reverse().join('')
    clearString === reverseString ? console.log("переданная строка является палиндромом") :
        console.log("переданная строка не является палиндромом");

}

const userString = prompt('Введите текст');
PalindromeCheck(userString)
