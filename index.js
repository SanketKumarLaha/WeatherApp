const container = document.querySelector(".container");
const place = document.querySelector("#place");
const sky = document.querySelector("#sky");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const icon = document.querySelector("#icon");

const inputPlace = document.querySelector("#inputPlace");
let loc = "";

let weather = {
  apiKey: "f05f410a7dd62bb1bb46db34bb44bd61",
};
const onSearch = () => {
  loc = inputPlace.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${weather.apiKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      temp.innerHTML = Math.floor(json.main.temp) + "°C";
      place.innerHTML = json.name;
      sky.innerHTML = json.weather[0].description;
      wind.innerHTML = `🌬️${Math.floor(json.wind.speed * 3.6)} Kmps`;
      humidity.innerHTML = `💧 ${json.main.humidity}%`;
      if (json.weather[0].main == "Clouds") icon.src = "./cloud.svg";
      else if (json.weather[0].main == "Mist") icon.src = "./mist.svg";
      else if (json.weather[0].main == "Clear") icon.src = "./clearSky.svg";
      else if (
        json.weather[0].main == "Rain" ||
        json.weather[0].main == "Drizzle"
      )
        icon.src = "./rain.svg";
      else if (json.weather[0].main == "Snow") icon.src = "./snow.svg";
      else if (json.weather[0].main == "Thunderstorm")
        icon.src = "./thunderstorm.svg";
      else icon.src = "./smoky.svg";
    });
};
