/*

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

*/

const coinInput = document.getElementById('coin-slot');
const button = document.getElementById('submit');
const resultsDiv = document.getElementById('results');

var coinJar = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    halfDollars: 0
};


function coinCounter(input) {

    coinJar.halfDollars = Math.floor(input / .50);
    newInput = input - (coinJar.halfDollars * .50);
    coinJar.quarters = Math.floor(input / .25);
    newInput = input - (coinJar.quarters * .25);
    coinJar.dimes = Math.floor(newInput / .10);
    newInput = newInput - (coinJar.dimes * .10);
    coinJar.nickels = Math.floor(newInput / .05);
    newInput = newInput - (coinJar.nickels * .05);
    coinJar.pennies = Math.round(newInput / .01);
    printToDom(coinJar);
}

button.addEventListener("click", function () {
    let input = coinInput.value;
    coinCounter(input);
});

function printToDom(coins) {
    resultsDiv.innerHTML =
        `<h3>Pennies: ${coins.pennies}</h3>
        <h3>Nickels: ${coins.nickels}</h3>
        <h3>Dimes: ${coins.dimes}</h3>
        <h3>Quarter: ${coins.quarters}</h3>
        <h3>Half Dollars: ${coins.halfDollars}`;

};
