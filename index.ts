#! /usr/bin/env node
import inquirer from "inquirer";

let currency:any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
