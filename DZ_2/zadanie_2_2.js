var userSelect = prompt("Какой системой быстрых переводов хотите перевести деньги?\n 1. Юнистрим \n 2. Золотая корона\n 3. РИА \n 4. Контакт ");
var Transfer = "Деньги отправлены системой "
if (Number(userSelect)===1 || userSelect === "Юнистрим" || userSelect === "Unistream") {
    console.log(Transfer + "Юнистрим");
} else if (Number(userSelect)===2 || userSelect === "Золотая корона") {
    console.log(Transfer + "Золотая корона");
} else if (Number(userSelect)===3 || userSelect === "РИА") {
    console.log(Transfer + "РИА");
} else if (Number(userSelect)===4 || userSelect === "Контакт") {
    console.log(Transfer + "Контакт");
} else {
    console.log("Выберите от 1-4 или напишите систему ");
}
