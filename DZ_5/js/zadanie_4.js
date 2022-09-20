function ValidationTaxIdentificationNumber(taxIdentificationNumber) {
    if (taxIdentificationNumber.length === 14) {
        if (taxIdentificationNumber[0] === '0' ||
            taxIdentificationNumber[0] === '1' ||
            taxIdentificationNumber[0] === '2') {
            console.log("Ваш ИНН прошел проверку")
        } else {
            console.log("Первый символ должен быть 0,1,2");
        }
    } else {
        console.log("Длина должна быть 14 символов");
    }
}

const taxIdentificationNumber = "22707198500717";
ValidationTaxIdentificationNumber(taxIdentificationNumber)
