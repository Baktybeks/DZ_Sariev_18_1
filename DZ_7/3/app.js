const taxIdentificationNumber =
    ["10101200046789", "01502198500012", "01203199000798", "01502198500012", "23009199878945", "11508199174125",
        "00404199400025", "11405200299999", "01307199900414"]


const filterTaxIdentificationNumber = taxIdentificationNumber.filter((num) => num[0] === "0")
console.log(filterTaxIdentificationNumber);
