function ReturnMinNumber(userNumber1, userNumber2) {
    return (userNumber1 > userNumber2 ? userNumber2 : userNumber1);
}

var userNumber1 = prompt("Введите первое число");
if (userNumber1 === "" || isNaN(userNumber1) || userNumber1 === null) {
    alert("Введите первое число цифрами")
} else {
    var userNumber2 = prompt("Введите второе число")
    if (userNumber2 === "" || isNaN(userNumber2) || userNumber2 === null) {
        alert("Введите второе число цифрами")
    } else {
        console.log(ReturnMinNumber(userNumber1, userNumber2))
    }
}