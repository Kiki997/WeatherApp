// Getting our curr weather elements
const iconElement = document.querySelector(".weather-icon");
const temperatureValueElement = document.querySelector(".temperature-value p");
const temperatureDescriptionElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
// const currDescription = document.querySelector(".currDescription");
const minTemperature = document.querySelector(".min");
const maxTemperature = document.querySelector(".max");
const realTemperature = document.querySelector(".realFeal");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const place = document.querySelector(".place");

// App data
const weather = {} ;
const forecast = {};
const KELVIN = 273;
//API key
const key = "52734432c69c103a6d9e3a1c55339bdd";
//const keyForecast= "bf5f1f48412785d2c83da83d50cff70f";

weather.temperature = {
    unit : "celsius"
}
//Check if browser suports Geolocation

if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.style.display = " block";
    notificationElement.innerHTML = "<p>Browser doesnt support Geolocation </p>";
}

//Set user position
function setPosition ( position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
    getForecast(latitude, longitude);
}

//Show error message
function showError(error) {
    notificationElement.style.display = " block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;

}

//Get weather from API and update our elements

function  getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    //console.log(api);

    fetch(api)
        .then(function(response){
            let data = response.json();
            console.log(data);
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].main;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.currDescription= data.weather[0].description;
            weather.minTemperature= Math.floor(data.main.temp_min - KELVIN);
            weather.maxTemperature= Math.floor(data.main.temp_max - KELVIN);
            weather.realTemperature= Math.floor(data.main.feels_like - KELVIN);
            weather.humidity=data.main.humidity;
            weather.visibility =data.visibility/1000;
            

           // getForecast(weather.city);

            
          //  console.log(weather.currDescription);
        })
        .then (function(){
            displayWeather();

        });
}



function displayWeather(){
    iconElement.innerHTML= `<img src="icons/${weather.iconId}.png" />`;
    temperatureValueElement.innerHTML = `${weather.temperature.value} <span > ° C  </span> `;
    temperatureDescriptionElement.innerHTML = weather.description;
    locationElement.innerHTML= `<i class="material-icons" style="font-size:15px">place</i>  ${weather.city}, ${weather.country}`;
    // currDescription.innerHTML = weather.currDescription;
    minTemperature.innerHTML = `    ${weather.minTemperature} <span > ° C  </span> `;
    maxTemperature.innerHTML = `        ${weather.maxTemperature} <span > ° C  </span> `;
    realTemperature.innerHTML = ` Feels like ${weather.realTemperature} <span > ° C  </span> `;
    humidity.innerHTML = `  ${weather.humidity} <span > % </span> `;
    visibility.innerHTML= ` ${weather.visibility} <span> km </span>`;
    place.innerHTML = weather.city+"," + " "+ weather.country;



}

const keyForecast = "927d09bc49dbee6aac7f5cb1df707542";

//Getting our forecast elements
const Day1 = document.querySelector(".day1");
const Day2 = document.querySelector(".day2");
const Day3 = document.querySelector(".day3");
const Day4 = document.querySelector(".day4");
const Day5 = document.querySelector(".day5");
const weatherIcon1 = document.querySelector(".weather-icon1");
const weatherIcon2 = document.querySelector(".weather-icon2");
const weatherIcon3 = document.querySelector(".weather-icon3");
const weatherIcon4 = document.querySelector(".weather-icon4");
const weatherIcon5 = document.querySelector(".weather-icon5");
const temperatureValue1 = document.querySelector(".temperature-value1 p")
const temperatureValue2 = document.querySelector(".temperature-value2 p")
const temperatureValue3 = document.querySelector(".temperature-value3 p")
const temperatureValue4 = document.querySelector(".temperature-value4 p")
const temperatureValue5 = document.querySelector(".temperature-value5 p")
const temperatureDescriptionElement1 = document.querySelector(".temperature-description1 p");
const temperatureDescriptionElement2 = document.querySelector(".temperature-description2 p");
const temperatureDescriptionElement3 = document.querySelector(".temperature-description3 p");
const temperatureDescriptionElement4 = document.querySelector(".temperature-description4 p");
const temperatureDescriptionElement5 = document.querySelector(".temperature-description5 p");
const minMax1= document.querySelector(".min-max1 p");
const minMax2= document.querySelector(".min-max2 p");
const minMax3= document.querySelector(".min-max3 p");
const minMax4= document.querySelector(".min-max4 p");
const minMax5= document.querySelector(".min-max5 p");

function  getForecast(latitude, longitude){
  let api =`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${keyForecast}`;
  //  let api = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${key}`;

   // let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
   // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
   //api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}


    fetch(api)
        .then(function(response){
            let data = response.json();
            console.log(data);
            return data;
        })
        .then(function(data){
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d1 = new Date(data.list[1].dt * 1000 );
            var dayName1 = days[d1.getDay()];
            //console.log(dayName)
            forecast.day1 = dayName1;
            var d2 = new Date(data.list[2].dt * 1000 );
            var dayName2 = days[d2.getDay()];
            forecast.day2= dayName2;
            var d3 = new Date(data.list[3].dt * 1000 );
            var dayName3 = days[d3.getDay()];
            forecast.day3= dayName3;
            var d4= new Date(data.list[4].dt * 1000 );
            var dayName4 = days[d4.getDay()];
            forecast.day4= dayName4;
            var d5= new Date(data.list[5].dt * 1000 );
            var dayName5 = days[d5.getDay()];
            forecast.day5= dayName5;
            forecast.icon1 = data.list[1].weather[0].icon;
            forecast.icon2 = data.list[2].weather[0].icon;
            forecast.icon3 = data.list[3].weather[0].icon;
            forecast.icon4 = data.list[4].weather[0].icon;
            forecast.icon5 = data.list[5].weather[0].icon;
            forecast.tempVal1 = Math.floor(data.list[1].temp.day - KELVIN);
            forecast.tempVal2 = Math.floor(data.list[2].temp.day - KELVIN);
            forecast.tempVal3 = Math.floor(data.list[3].temp.day - KELVIN);
            forecast.tempVal4 = Math.floor(data.list[4].temp.day - KELVIN);
            forecast.tempVal5 = Math.floor(data.list[5].temp.day - KELVIN);
            forecast.temDesc1 = data.list[1].weather[0].main;
            forecast.temDesc2 = data.list[2].weather[0].main;
            forecast.temDesc3 = data.list[3].weather[0].main;
            forecast.temDesc4 = data.list[4].weather[0].main;
            forecast.temDesc5 = data.list[5].weather[0].main;
            forecast.min1 =Math.floor(data.list[1].temp.min - KELVIN);
            forecast.max1 =Math.floor(data.list[1].temp.max - KELVIN);
            forecast.min2 =Math.floor(data.list[2].temp.min - KELVIN);
            forecast.max2 =Math.floor(data.list[2].temp.max - KELVIN);
            forecast.min3 =Math.floor(data.list[3].temp.min - KELVIN);
            forecast.max3 =Math.floor(data.list[3].temp.max - KELVIN);
            forecast.min4 =Math.floor(data.list[4].temp.min - KELVIN);
            forecast.max4 =Math.floor(data.list[4].temp.max - KELVIN);
            forecast.min5 =Math.floor(data.list[5].temp.min - KELVIN);
            forecast.max5 =Math.floor(data.list[5].temp.max - KELVIN);
         //   icon1.innerHTML= `<img src="icons/${weather.iconId}.png" />`;

        })
        .then (function(){
            displayForecast();
        });
        
}

function displayForecast(){
    Day1.innerHTML = forecast.day1;
    Day2.innerHTML= forecast.day2;
    Day3.innerHTML= forecast.day3;
    Day4.innerHTML= forecast.day4;
    Day5.innerHTML= forecast.day5;
    weatherIcon1.innerHTML = `<img src="icons/${forecast.icon1}.png" />`;
    weatherIcon2.innerHTML = `<img src="icons/${forecast.icon2}.png" />`;
    weatherIcon3.innerHTML = `<img src="icons/${forecast.icon3}.png" />`;
    weatherIcon4.innerHTML = `<img src="icons/${forecast.icon4}.png" />`;
    weatherIcon5.innerHTML = `<img src="icons/${forecast.icon5}.png" />`;
    //temperatureValue1.innerHTML = forecast.tempVal1;
    temperatureValue1.innerHTML = `${forecast.tempVal1} <span > ° C  </span> `;
    temperatureValue2.innerHTML = `${forecast.tempVal2} <span > ° C  </span> `;
    temperatureValue3.innerHTML = `${forecast.tempVal3} <span > ° C  </span> `;
    temperatureValue4.innerHTML = `${forecast.tempVal4} <span > ° C  </span> `;
    temperatureValue5.innerHTML = `${forecast.tempVal5} <span > ° C  </span> `;
    temperatureDescriptionElement1.innerHTML = forecast.temDesc1;
    temperatureDescriptionElement2.innerHTML = forecast.temDesc2;
    temperatureDescriptionElement3.innerHTML = forecast.temDesc3;
    temperatureDescriptionElement4.innerHTML = forecast.temDesc4;
    temperatureDescriptionElement5.innerHTML = forecast.temDesc5;
    minMax1.innerHTML = `${forecast.min1} <span > ° C  / </span> ${forecast.max1} <span > ° C  </span> `;
    minMax2.innerHTML = `${forecast.min2} <span > ° C  / </span> ${forecast.max2} <span > ° C  </span> `;
    minMax3.innerHTML = `${forecast.min3} <span > ° C  / </span> ${forecast.max3} <span > ° C  </span> `;
    minMax4.innerHTML = `${forecast.min4} <span > ° C  / </span> ${forecast.max4} <span > ° C  </span> `;
    minMax5.innerHTML = `${forecast.min5} <span > ° C  / </span> ${forecast.max5} <span > ° C  </span> `;



}

