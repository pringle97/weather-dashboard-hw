//creating search function to search weather by city name
let myStoredSearches = JSON.parse(localStorage.getItem('myStoredSearches')) || []
for (let i = 0; i < myStoredSearches.length; i++) {
  let recentSearches = document.getElementById('recentSearches')
  recentSearches.innerHTML += `
    <button class="searchRecent">${myStoredSearches[i]}</button>
  `
}

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const cityName = document.getElementById('searchCity').value
  myStoredSearches.push(cityName)
  localStorage.setItem('myStoredSearches', JSON.stringify(myStoredSearches))

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=f3f2b60e59009428800ffe45c8e776e4`)
    .then(res => {
      const weather = res.data
      document.getElementById('city').innerHTML = `
        <h1>${weather.name}</h1>
      `
      document.getElementById('temp').innerHTML = `
        <h2>${weather.main.temp}°F</h2>
      `
      document.getElementById('icon').innerHTML = `
        <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="weather icon"/>
      `
      document.getElementById('humidity').innerHTML = `
        <div>Humidity: ${weather.main.humidity}%</div>
      `
      document.getElementById('wind').innerHTML = `
        <div>Wind: ${weather.wind.speed}km/h</div>
      `
      const lat = weather.coord.lat
      const lon = weather.coord.lon
      // console.log(res.data)
      document.getElementById('UVI')
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=f3f2b60e59009428800ffe45c8e776e4`)
        .then(resp => {
          const uviData = resp.data
          const uvi = uviData.current.uvi
          // console.log(uvi)
          document.getElementById('UVI').innerHTML = `<div>UVI: ${uvi}</div>`
          foreCast()
        })  
    })
//local storage maybe
})

//5 days
function foreCast() {
  const cityName = document.getElementById('searchCity').value
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=f3f2b60e59009428800ffe45c8e776e4`)
    .then(respo => {
      const fiveDays = respo.data
      // console.log(fiveDays)

      let day1 = {
        date: fiveDays.list[0].dt_txt.split(" ")[0],
        temp: fiveDays.list[0].main.temp,
        humidity: fiveDays.list[0].main.humidity,
        wind: fiveDays.list[0].wind.speed,
        icon: fiveDays.list[0].weather[0].icon
      }
      let day2 = {
        date: fiveDays.list[8].dt_txt.split(" ")[0],
        temp: fiveDays.list[8].main.temp,
        humidity: fiveDays.list[8].main.humidity,
        wind: fiveDays.list[8].wind.speed,
        icon: fiveDays.list[8].weather[0].icon
      }
      let day3 = {
        date: fiveDays.list[16].dt_txt.split(" ")[0],
        temp: fiveDays.list[16].main.temp,
        humidity: fiveDays.list[16].main.humidity,
        wind: fiveDays.list[16].wind.speed,
        icon: fiveDays.list[16].weather[0].icon
      }
      let day4 = {
        date: fiveDays.list[24].dt_txt.split(" ")[0],
        temp: fiveDays.list[24].main.temp,
        humidity: fiveDays.list[24].main.humidity,
        wind: fiveDays.list[24].wind.speed,
        icon: fiveDays.list[24].weather[0].icon
      }
      let day5 = {
        date: fiveDays.list[32].dt_txt.split(" ")[0],
        temp: fiveDays.list[32].main.temp,
        humidity: fiveDays.list[32].main.humidity,
        wind: fiveDays.list[32].wind.speed,
        icon: fiveDays.list[32].weather[0].icon
      }
      let allDays = [
        day1, day2, day3, day4, day5
      ]
      document.getElementById('forecast').innerHTML = ''
      allDays.forEach(day => {
        document.getElementById('forecast').innerHTML += `
        <div>
        <h2>${day.date}</h2>
        <h1>${day.temp}°F</h1>
        <div>
          <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="weather icon" />
          <div>Cloudy</div> 
        </div>
        <div>Humidity: ${day.humidity}%</div>
        <div>Wind speed:${day.wind} km/h</div>
        </div>
      `
      })
    })
}


