function ReverseString(userString) {
    if (userString === null || userString === undefined) {
        console.log("Введите строку");
    } else {
        console.log(userString + " -> " + userString.split('').reverse().join(''));
    }
}

const userString = prompt('Введите текст для переворота');
ReverseString(userString)