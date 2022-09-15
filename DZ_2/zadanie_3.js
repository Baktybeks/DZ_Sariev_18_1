var userInput1 = prompt("Введите первое число");
if (userInput1 === "" || isNaN(userInput1) || userInput1 === null) {
    alert("Введите первое число цифрами")
} else {
    var userInput2 = prompt("Введите второе число")
    if (userInput2 === "" || isNaN(userInput2) || userInput2 === null) {
        alert("Введите второе число цифрами")
    } else {
        if (Number(userInput1) > Number(userInput2)) {
            alert("Первое число больше второго " + userInput1 + ">" + userInput2)
        } else alert("Второе число больше первого " + userInput2 + ">" + userInput1)
    }
}
