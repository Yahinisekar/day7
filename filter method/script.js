//a Get all the countries from Asia continent /region using Filter function

const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload= () => {
    const continent = JSON.parse(xhr.response);
    let asia = continent.filter(country => country.region === 'Asia');
    console.log(`Countries in Asia: ${asia.map(country => country.name.common)}`);
}




