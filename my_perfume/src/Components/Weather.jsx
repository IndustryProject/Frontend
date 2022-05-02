import { useEffect, useState } from "react";

const Weather = ()=>{
    const [coords, saveCoords] = useState();
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();

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
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={1a61af595bccebe4ba2d0297d1ed90b3}')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length -1];
        setTemp(temp);
        setWeather(weathers.main);
    })
}
useEffect(()=>{
    requestCoords();
}, []);

return(
    <div>
        a
    </div>
)

}



export default Weather;