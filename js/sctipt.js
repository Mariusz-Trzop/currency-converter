{
    const welcome = () => {
        console.log("Hello Friens!");
    };

    const calculateResult = (amount, currency) => {
        const rateCZK = 0.1956;
        const rateEUR = 4.6946;
        const rateGBP = 5.2992;
        const rateUSD = 4.3398;

        switch (currency) {
            case "CZK":
                return amount / rateCZK;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        };
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFornSubmit = () => {
        (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency);

            updateResultText(amount, result, currency);
        };
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFornSubmit);
    };

    init();
    welcome();
}