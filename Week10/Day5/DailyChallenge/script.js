document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '4e1c846084c44a6ed5a5cd4e'; 
    const currencyForm = document.getElementById('currencyForm');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const resultDiv = document.getElementById('result');
    const switchButton = document.getElementById('switchButton');


    async function fetchSupportedCurrencies() {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            populateCurrencyOptions(data.supported_codes);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }


    function populateCurrencyOptions(currencies) {
        currencies.forEach(currency => {
            const optionFrom = document.createElement('option');
            optionFrom.value = currency[0];
            optionFrom.textContent = `${currency[0]} - ${currency[1]}`;
            fromCurrencySelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = currency[0];
            optionTo.textContent = `${currency[0]} - ${currency[1]}`;
            toCurrencySelect.appendChild(optionTo);
        });
    }


    async function fetchConversionRate(fromCurrency, toCurrency, amount) {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            displayResult(data.conversion_result, toCurrency);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }


    function displayResult(result, toCurrency) {
        resultDiv.textContent = `Converted amount: ${result.toFixed(2)} ${toCurrency}`;
    }


    currencyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = amountInput.value;
        await fetchConversionRate(fromCurrency, toCurrency, amount);
    });


    switchButton.addEventListener('click', () => {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        fromCurrencySelect.value = toCurrency;
        toCurrencySelect.value = fromCurrency;
    });


    fetchSupportedCurrencies();
});
