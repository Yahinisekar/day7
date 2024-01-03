// c.Print the following details name, capital, flag, using forEach function

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
  const country = JSON.parse(xhr.response);
    country.forEach(
        (country) => console.log(`${country.name.common}  ${country.capital}  ${country.flags.png}`));
};
