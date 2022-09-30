const selectedMoneySystem = prompt(
  "Какой системой быстрых переводов хотите перевести деньги?\n 1. Юнистрим \n 2. Золотая корона\n 3. РИА \n 4. Контакт "
);
switch (selectedMoneySystem) {
  case "Юнистрим":
  case "Unistream":
  case "1":
    console.log("Деньги отправлены системой Юнистрим");
    break;
  case "Золотая корона":
  case "Golden crown":
  case "2":
    console.log("Деньги отправлены системой Золотая корона");
    break;
  case "РИА":
  case "RIA":
  case "3":
    console.log("Деньги отправлены системой РИА");
    break;
  case "Контакт":
  case "Contact":
  case "4":
    console.log("Деньги отправлены системой Контакт");
    break;
  default:
    console.log("Система быстрых переводов \"" + selectedMoneySystem + "\" не поддерживается");
}