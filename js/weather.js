const API_KEY = "202a728226e90207897fc0c1e467aaef";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `현재 위치 : ${data.name}`;
            weather.innerText = `오늘의 날씨 : ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find where are you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


