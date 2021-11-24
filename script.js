//search button function showing weather conditions of searched city
//display city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//UV index changes colors based on severity of weather
const api_key = "6a7320a3950673dfa74121b04000e29a"

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const cityName = document.getElementById('searchCity').value
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=43d49819fe899466b30d41716359a5fd`)
    .then(res => {
      const weather = res.data
      console.log(res.data)
    })
})
const weatherData = (lat, lon) => {
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${api_key}`)
    .then((res) => {
      console.log(res.data);
    })
}