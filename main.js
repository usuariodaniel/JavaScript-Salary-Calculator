const { gets, print } = require("./auxiliar-functions");

const salaryBase = gets();
const aditionalBenefits = gets();

function taxes(value, percent) {
  return value * (percent / 100);
}

function catchAliquote(salary) {
  if (salary >= 0 && salary <= 1100) {
    return 5;
  } else if (salary >= 1100.01 && salary <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const taxeAliquote = catchAliquote(salaryBase);
const TaxesValue = taxes(salaryBase, taxeAliquote);
const transferValue = salaryBase - TaxesValue + aditionalBenefits;

print(transferValue);
