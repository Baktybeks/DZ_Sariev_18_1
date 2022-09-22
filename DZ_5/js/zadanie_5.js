function CountChar(userString, char) {
    let countChar = 0
    for (let i = 0; i < userString.length; i++) {
        if (userString.toLowerCase()[i] === char) {
            countChar += 1;
        }
    }
    console.log(" -> " + countChar)
}

CountChar("Abrakadabra", "a")

// символа в строке. Например: CountChar("Abrakadabra", "a") -> 5, CountChar("Hello world", "o" ) -> 2