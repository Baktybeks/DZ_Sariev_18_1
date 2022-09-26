function MakeDiscount(price, discountCb) {
    return discountCb(price)

}

const itemPrice = 1000;

const MakePercentDiscount = function (discountPercent) {
    return price => price * ((100 - discountPercent) / 100);
}



const MakePercentDiscountForKids = MakePercentDiscount(15);
const MakePercentDiscountForPensioners = MakePercentDiscount(25);


// const MakeFixedDiscount = (price, discountFix) => price - discountFix;
const MakeFixedDiscount = (discountFix) => (price) => price - discountFix;

const MakeFixedDiscountBasedOnPromocode = MakeFixedDiscount(500);



console.log(MakePercentDiscount(1000, 20));
console.log(MakeFixedDiscount(1000, 250));
console.log(MakeDiscount(1000, MakePercentDiscountForKids));
console.log(MakeDiscount(1000, MakeFixedDiscountBasedOnPromocode));

console