"use strict";

const city = document.querySelector(".container input");
const cityBtn = document.querySelector(".container button");
const api = "fa5e20c733614872101cf1c6bb884e5f";
const link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon = document.querySelector(".weather-icon");
const beforePress = document.querySelector(".container");

async function weather(city) {
  const response = await fetch(link + city + `&appid=${api}`);
  const data = await response.json();
  console.log(data);

  beforePress.classList.remove("hidden");
  document.querySelector(".weather").style.display = "block";

  if (data.weather[0].main === "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main === "Mist") {
    icon.src = "images/mist.png";
  } else if (data.weather[0].main === "Clear") {
    icon.src = "images/clear.png";
  }

  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " " + "C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km";
}

cityBtn.addEventListener("click", () => {
  if (city.value === "") {
    alert("Please enter a valid City Name!");
  } else {
    weather(city.value);
  }
});
