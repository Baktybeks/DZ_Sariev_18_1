const chessboardSize = prompt("Введите размер шахматного стола");
let chessboard = "";
for (let i = 1; i < Number(chessboardSize)+1; i++) {
    for (let j = 1; j < Number(chessboardSize)+1; j++) {
        if ((i+j) % 2 === 0) {
            chessboard = chessboard.concat("#")
        } else {
            chessboard = chessboard.concat(" ")
        }
    }
    chessboard = chessboard.concat("\n")
}
alert(chessboard)