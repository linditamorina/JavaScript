const app = {
    init: () => {
        document
            .getElementById('btnGet')
            .addEventListener('click', app.fetchWeather);
        document
            .getElementById('btnCurrent')
            .addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        // uses the latitude and longitude to fetch the weather
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = 'cad8a09d40f533ddb93df3d23bea19bd';
        let lang = 'en'
        let units = 'metric'
        let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`
        // fetch weather
        fetch(url)
        .then(resp => {
            if(!resp.ok) throw new Error(resp.statusText)
            return resp.json();
        })
        .then(data => {
            app.showWeather(data)
        })
        .catch(console.err)
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, // 10 seconds
            maximumAge: 1000 * 60 * 5 // 5 minutes
        };
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts)
    },
    ftw: (position) => {
        // got position
        document.getElementById('latitude').value = 
            position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value = 
            position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        // geolocation failed
        console.error(err)
    },
    showWeather: (resp) => {
        console.log(resp)
        let row = document.querySelector('.weather.row')

        row.innerHTML = resp.daily
            .map((day, idx) => {
                if(idx <= 2) {
                    let dt = new Date(day.dt * 1000); // timestamp * 1000
                    let sr = new Date(day.sunrise * 1000).toTimeString();
                    let ss = new Date(day.sunset * 1000).toTimeString();
                    return `
                        <div class="col">
                            <div class="card">
                                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description}">
                                <div class="card-body">
                                    <h3 class="card-title"><strong>${day.weather[0].main}</strong></h3>
                                    <p class="card-text">High <strong>${day.temp.max}</strong>&deg;C Low <strong>${day.temp.min}</strong>&deg;C</p>
                                    <p class="card-text">High Feels like <strong>${day.feels_like.day}</strong>&deg;C</p>
                                    <p class="card-text">Pressure <strong>${day.pressure}</strong>mb</p>
                                    <p class="card-text">Humidty <strong>${day.humidity}</strong>%</p>
                                    <p class="card-text">UV Index <strong>${day.uvi}</strong></p>
                                    <p class="card-text">Precipitation <strong>${day.pop * 100}</strong>%</p>
                                    <p class="card-text">Dew Point <strong>${day.dew_point}</strong></p>
                                    <p class="card-text">Wind <strong>${day.wind_speed}</strong>m/s, <strong>${day.wind_deg}</strong>&deg;</p>
                                    <p class="card-text">Sunrise <strong>${sr}</strong></p>
                                    <p class="card-text">Sunset <strong>${ss}</strong></p>
                                </div>
                            </div>
                        </div>
                    `
                }
            })
            .join('')
    }
};

app.init();