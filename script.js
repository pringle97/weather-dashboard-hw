// const api_key = 'f3f2b60e59009428800ffe45c8e776e4'
//search button function showing weather conditions of searched city
//display city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//UV index changes colors based on severity of weather


//creating search function to search weather by city name

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const cityName = document.getElementById('searchCity').value
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=f3f2b60e59009428800ffe45c8e776e4`)
    .then(res => {
      const weather = res.data
      document.getElementById('city').innerHTML = `
        <h1>${weather.name}</h1>
      `
      document.getElementById('temp').innerHTML = `
        <h2>${weather.main.temp}°F</h2>
      `
      document.getElementById('humidity').innerHTML = `
        <div>Humidity: ${weather.main.humidity}%</div>
      `
      document.getElementById('wind').innerHTML = `
        <div>Wind: ${weather.wind.speed}km/h</div>
      `
      // document.getElementById('UVI').innerHTML = `
        <div>${}</div>
      // `
      console.log(res.data)
    })
})

