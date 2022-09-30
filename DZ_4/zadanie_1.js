const triangleHeight = prompt('Введите высоту треугольника');
let numberOfStars = '';
for (let i = 0; i < Number(triangleHeight); i++) {
    numberOfStars = numberOfStars.concat("*")
    console.log(numberOfStars)
}