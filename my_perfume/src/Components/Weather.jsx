import { useEffect, useState } from "react";
import "./weather.css";

const Weather = ()=>{
    const [coords, saveCoords] = useState();
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();

function weather_check(status){
    if(status == "Clear"){
        document.getElementsByClassName("weather-icon cloud").className = "weather-icon sun";
    }
    else if(status == "Clouds"){
        document.getElementsByClassName("weather-icon sun").className = "weather-icon cloud";
    }
    else if(status == "Rain"){
        document.getElementsByClassName("weather-icon sun").className = "weather-icon cloud";
    }
    else{
        document.getElementsByClassName("weather-icon sun").className = "weather-icon sun";
        document.getElementsByClassName("weather-icon cloud").className = "weather-icon sun";
    }
}

function handleGeoSucc(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoErr(err){
    console.log("geo err has occured!", err);
}
function requestCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
}
function getWeather(lat, lon){
    console.log(lat)
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=318cb7b0cfdf9288f32ae1d228a2a4f0'
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={cbd6abd76c820fd3522b9ed600fe694d}')
    fetch(url)
    
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        const temp = (data.main.temp-273.15)*100;
        const weathers = data.weather[data.weather.length -1];
        setTemp(Math.round(temp)/100);
        
        setWeather(weathers.main);
    })
}
useEffect(()=>{
    requestCoords();
    weather_check(weather);
}, []);

return(
    <div>
        <div className="weather-wrapper">
            <div className="weather-card madrid">
                <div className="weather-icon sun"></div>
                <h1>{temp}º /</h1>
            </div>
        </div>
        {/*temp:{temp}
        <br/><br/>
        weather:{weather}*/}
    </div>
)

}



export default Weather;