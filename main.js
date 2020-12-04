// information to reach API
const openWeatherKey = 'c0da0440825c9f2af6303d5f6d53cc71';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// information to select pages
const inputField = document.querySelector('#field');
const submit = document.querySelector('#submit');

const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temp');
const weath = document.querySelector('.weather');
const highLow = document.querySelector('.high-low');

// AJAX functions

const getWeather = () => {
    const searchQuery = inputField.value; 
    const endpoint = `${weatherUrl}?q=${searchQuery}&units=metric&APPID=${openWeatherKey}`;
    fetch(endpoint).then(response => {
        if (response.ok) {
           return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message)
    }).then(jsonResponse => {
        console.log(jsonResponse);
        const nameValue = jsonResponse['name'];
        const tempValue = jsonResponse['main']['temp'];
        const natureValue = jsonResponse['weather'][0]['description'];
        const low = jsonResponse['main']['temp_min'];
        const high = jsonResponse['main']['temp_max'];
        //const highLowValue = jsonResponse[]

        
        
        city.innerHTML = nameValue;
        temp.innerHTML = `${tempValue}°c`;
        weath.innerHTML = natureValue;
        highLow.innerHTML = `${low}°c / ${high}°c`;
        //highLow.innerHTML = 
    })
    
    }


submit.addEventListener('click', getWeather);
// current date section
const currentDate = new Date().toDateString();
date.innerHTML = currentDate;