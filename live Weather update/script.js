const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description= document.querySelector(".description");

btn.addEventListener("click",()=>{
   let city = input.value; 
   getWeather(city);

})


function getWeather(city){
    console.log(city);


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c3ec7080c89def53b8200f258fd0240b'}`)
    .then(Response=>Response.json())
    .then(data =>{
        console.log(data);
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${iconCode}.png" alt = "Weather Icon"/>`
        
        const weatherCity = data.name;
        const weatherCountry =data.sys.country;
        weather.innerHTML=`${weatherCity},${weatherCountry}`;


        let weatherTemp = data.main.temp;
        weatherTemp= weatherTemp -273;
        let  temp = weatherTemp.toFixed(2);
        temperature.innerHTML = `${temp} °C`;


        const description = data.weather[0].description;
        description.innerHTML = description;
    })

    
}




