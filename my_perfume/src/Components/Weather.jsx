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
}, []);

return(
    <div>
        
        temp:{temp}
        <br/><br/>
        weather:{weather}
    </div>
)

}



export default Weather;