// var moneyTransfer = prompt("Введите цифру какой системой быстрых переводов хотите перевести деньги?\n 1. Юнистрим \n 2. Золотая корона\n 3. РИА \n 4. Контакт ");
// switch (moneyTransfer) {
//     case "1":
//         console.log("Деньги отправлены системой Юнистрим");
//         break;
//     case "2":
//         console.log("Деньги отправлены системой Золотая корона");
//         break;
//     case "3":
//         console.log("Деньги отправлены системой РИА");
//         break;
//     case "4":
//         console.log("Деньги отправлены системой Контакт");
//         break;
//     default :
//         console.log("Выберите от 1-4");
// }

var moneyTransfer = prompt("Какой системой быстрых переводов хотите перевести деньги?\n 1. Юнистрим \n 2. Золотая корона\n 3. РИА \n 4. Контакт ");
switch (moneyTransfer) {
    case "Юнистрим":
    case "Unistream":
        console.log("Деньги отправлены системой Юнистрим");
        break;
    case "Золотая корона":
        console.log("Деньги отправлены системой Золотая корона");
        break;
    case "РИА":
        console.log("Деньги отправлены системой РИА");
        break;
    case "Контакт":
        console.log("Деньги отправлены системой Контакт");
        break;
    default :
        console.log("Выберите от 1-4");
}