//search button function showing weather conditions of searched city
//display city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//UV index changes colors based on severity of weather

let weather = {
  apiKey: "f3f2b60e59009428800ffe45c8e776e4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () { 
    this.fetchWeather(document.querySelector(".search-bar").value)
  }
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener
  if (event.key == "Enter") {
    weather.search
  }
//creating search function to search weather by city name
// document.getElementById('search').addEventListener('click', event => {
//   event.preventDefault()
//   const cityName = document.getElementById('name')
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=f3f2b60e59009428800ffe45c8e776e4`)
//     .then(res => {
//       const weather = res.data
//       console.log(res.data)
//     })
// })
