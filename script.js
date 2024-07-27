const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const weather_body=document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="56328bf6e6f93d734b08358ef0080926";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response=> Response.json());

    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="/assets/cloudy.png";
            break;
        case 'Clear':
            weather_img.src="/assets/sun.png";
            break;
        case 'Rain':
            weather_img.src="/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src="/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src="/assets/snow.png";
            break;
    
    }
    console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});