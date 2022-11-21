const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
input.onsubmit = (e) => {
 e.preventDefault();
 weatherUpdate(city.value);
 city.value = "";
};
weatherUpdate = (city) => {
 const xhr = new XMLHttpRequest();
 xhr.open(
   "GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf8c6df05f829415a292f1f6c915c025`);
 xhr.send();
 xhr.onload = () => {
   if (xhr.status === 404) {
     alert("Place not found");
   } else {
     var data = JSON.parse(xhr.response);
     cityName.innerHTML = data.name;
     Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
     main.innerHTML = data.weather[0].main;
     discription.innerHTML = data.weather[0].description;
   }
 };
};

weatherUpdate();