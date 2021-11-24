axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=43d49819fe899466b30d41716359a5fd`)

//search button function showing weather conditions of searched city
    //display city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//UV index changes colors based on severity of weather
document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const cityName = document.getElementById('searchCity').value