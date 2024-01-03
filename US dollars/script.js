// e. Print the country that uses US dollars as currency.

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
    const country = JSON.parse(xhr.response);
    let total = country.filter(country => country.currencies && country.currencies.USD);
    console.log(`Countries using Dollars:  ${total.map(country => country.name.common).join(', ')}`);
}