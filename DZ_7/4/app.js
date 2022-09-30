const accounts = [
    {AccountNo: "4894894894984", Currency: "KGS"},
    {AccountNo: "148964894898", Currency: "USD"},
    {AccountNo: "1561515610313", Currency: "RUB"},
    {AccountNo: "48974987894561465", Currency: "EUR"},
    {AccountNo: "1564848468", Currency: "KGS"},
    {AccountNo: "7894510215613215", Currency: "KZT"},
    {AccountNo: "489486486484948", Currency: "KGS"},
    {AccountNo: "7894510215613215", Currency: "CHY"},];

// const currency = accounts.filter(function (currency) {
//     return currency.Currency !== "KGS"
// })

const filterCurrency = accounts.filter((currency) => currency.Currency !== "KGS")
console.log(filterCurrency);