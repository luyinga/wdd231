//Select html elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "b0a78a7e32591b1d95e353994236f754"
const myLat = "-33.877"
const myLong = "18.487" 

//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

//TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
    try {
        const response = await fetch(myURL);  
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }                   

    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherData.weather[0].description);
    captionDesc.textContent = weatherData.weather[0].description;
}
