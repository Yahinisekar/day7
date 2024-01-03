//b Get all the countries with a population of less than 2 lakhs using Filter function

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
  const continent = JSON.parse(xhr.response);
  let population = continent.filter((country) => country.population && country.population <= 200000);
  console.log(
    `Countries in less population:  ${population
      .map((country) => country.name.common)
      .join(", ")}`
  );
};
