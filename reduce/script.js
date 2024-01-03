// d. Print the total population of countries using reduce function

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
  const country = JSON.parse(xhr.response);
    let total = country.reduce((acc, country) => {
        if (country.population > 0) {
            return acc + country.population;
        }
      return acc;
    
    }, 0);
    console.log(`The total population is ${total}`);
  
    
};
