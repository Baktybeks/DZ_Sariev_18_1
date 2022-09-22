function ReverseString(userString) {
    let reverseString = '';
    for (let i = userString.length-1; i >= 0; i--) {
        reverseString = reverseString.concat(userString[i]);
    }
    console.log("Введенный текст \"" + userString+ "\" после переворота => " + reverseString)
}

const userString = prompt('Введите текст для переворота');
ReverseString(userString)