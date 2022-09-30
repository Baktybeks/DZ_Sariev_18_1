var selectedColor = prompt("Введите цвет светофора");
switch (selectedColor) {
    case "зеленый":
        alert("Переходите дорогу");
        break;
    case "желтый":
        alert("Желтый сигнал запрещает движение");
        break;
    case "красный":
        alert("Красный сигнал в том числе мигающий, запрещает движение");
        break;
    default :
        alert("Написали не правильный цвет");
}