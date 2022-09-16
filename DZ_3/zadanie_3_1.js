const chessboardSize = prompt("Введите размер шахматного стола");
for (let i = 1; i < Number(chessboardSize)+1; i++) {
    let chessboard = "";
    for (let j = 1; j < Number(chessboardSize)+1; j++) {
        if ((i+j) % 2 === 0) {
            chessboard = chessboard.concat("#")
        } else {
            chessboard = chessboard.concat(" ")
        }
    }
    console.log(chessboard)
}



