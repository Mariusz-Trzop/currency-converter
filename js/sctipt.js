console.log("Hello Friens!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateCZK = 0.1956;
let rateEUR = 4.6946;
let rateGBP = 5.2992;
let rateUSD = 4.3398;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "CZK":
            result = amount / rateCZK;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
    };

    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});