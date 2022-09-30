const customersNames = ["Иванов Иван", "Смирнов Павел", "Дугин Юрий",
    "Старовойтова Елизавета", "Петрова Ксения", "Киселев Евгений", "Чибисов Вадим"]

function Transliteration(char) {
    switch (char) {
        case 'А': return 'A';
        case 'Б': return 'B';
        case 'В': return 'V';
        case 'Г': return 'G';
        case 'Д': return 'D';
        case 'Е': return 'E';
        case 'Ё': return 'E';
        case 'Ж': return 'ZH';
        case 'З': return 'Z';
        case 'И': return 'I';
        case 'Й': return 'I';
        case 'К': return 'K';
        case 'Л': return 'L';
        case 'М': return 'M';
        case 'Н': return 'N';
        case 'О': return 'O';
        case 'П': return 'P';
        case 'Р': return 'R';
        case 'С': return 'S';
        case 'Т': return 'T';
        case 'У': return 'U';
        case 'Ф': return 'F';
        case 'Х': return 'KH';
        case 'Ц': return 'TS';
        case 'Ч': return 'CH';
        case 'Ш': return 'SH';
        case 'Щ': return 'SH';
        case 'Ъ': return '';
        case 'Ы': return 'Y';
        case 'Ь': return '';
        case 'Э': return 'E';
        case 'Ю': return 'IU';
        case 'Я': return 'IA';
        case ' ': return ' ';
    }
}
const transliteration = customersNames.map((name) => Perebor(name));


function Perebor(name) {
    let transliterationName = '';
    for (let i = 0; i < (name.length); i++) {
        transliterationName += Transliteration(name[i].toUpperCase());
    }
    return transliterationName
}
console.log(transliteration)