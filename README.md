# JavaScript Salary Calculator

This repository contains a simple JavaScript application that calculates the net salary after tax deductions and additional benefits. It uses a few helper functions to perform its operations.

## Features

- Retrieves base salary and additional benefits from the user.
- Determines the tax rate based on the salary using the catchAliquote() function.
- Calculates the tax value based on the salary and the determined tax rate using the taxes() function.
- Computes the net salary by subtracting the tax value from the base salary and adding the additional benefits.
- Prints the net salary to the console.

## Usage

To run this application, simply clone the repository and execute the main JavaScript file (index.js) in a Node.js environment. The application will prompt you to enter the base salary and additional benefits. After entering these values, it will compute and print the net salary.

## How It Works

1. Imports auxiliary functions: The code begins by importing two functions, `gets` and `print`, from a module named `auxiliar-functions`. These functions are likely used to retrieve user inputs and print outputs, respectively.

2. Retrieves base salary and additional benefits: The `gets()` function is called twice to retrieve the base salary and additional benefits. These values are stored in the `salaryBase` and `aditionalBenefits` variables.

3. Defines tax calculation function: The `taxes()` function takes a value and a percentage, and returns the value multiplied by the percentage divided by 100. This is a common formula for calculating the amount of tax owed based on a certain percentage.

4. Determines tax rate based on salary: The `catchAliquote()` function determines the tax rate based on the salary. If the salary is between 0 and 1100, the tax rate is 5%. If the salary is between 1100.01 and 2500, the tax rate is 10%. For all other salaries, the tax rate is 15%.

```javascript
function catchAliquote(salary) {
  if (salary >= 0 && salary <= 1100) {
    return 5;
  } else if (salary >= 1100.01 && salary <= 2500) {
    return 10;
  } else {
    return 15;
  }
}
```

5. Calculates tax value and net salary: The `catchAliquote()` function is called with the base salary to determine the tax rate. Then, the `taxes()` function is called with the base salary and the determined tax rate to calculate the tax value. The net salary is calculated by subtracting the tax value from the base salary and adding the additional benefits. Finally, the net salary is printed using the `print()` function.

```javascript
const taxeAliquote = catchAliquote(salaryBase);
const TaxesValue = taxes(salaryBase, taxeAliquote);
const transferValue = salaryBase - TaxesValue + aditionalBenefits;

print(transferValue);
```

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
