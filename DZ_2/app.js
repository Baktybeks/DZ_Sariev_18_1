
var BankAccount = {
  Balance: 5000,
  AccountNumber: "941732143513843524",
  AccountCurrency: "KG",
  Department: {
    Name: "KICB",
    Address: "Bishkek"
  },
};

var customer = {
  Name: "Eugene",
  Surname: "Kiselev",
  CustomerType: 1, // Физ.лицо
  IsInternetBankingUser: true,
  IsMobileBankingUser: false,
  Verification: null,
  AdditionalInfo: undefined,
  Sex: 1,
  "Passport Data": {
    ID: "AN",
    Series: "135617",
    ExpiryDate: "01.01.2030",
    Authority: "MKK 30-01",
  },
};

if (customer.CustomerType == 1) {
  console.log("Клиент является физическим лицом");
} else {
  console.log("Клиент является юридическим лицом");
}
