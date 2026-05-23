const TAX_RATE = 0.095;
const TIP_RATE = 0.2;
function calculateBillTotal(bill){
    return (bill + bill * TAX_RATE + bill * TIP_RATE).toFixed(2);
}

var total = calculateBillTotal(20);
console.log(total);