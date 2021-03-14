function toggleMenu() {
    document.getElementsByClassName("primaryNav")[0].classList.toggle("hide");
   }



const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateString = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("currentDate").innerHTML = dateString;




if (day1[day] == 'Friday') {
    document.getElementById("pancake").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m..";
    
}
else {
    document.getElementById("pancake").style.display = "none";
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c393a6330a4f7f76d60604acccb72c17";

fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temperature').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
});



const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=c393a6330a4f7f76d60604acccb72c17"

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temperature'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('image'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('image'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});