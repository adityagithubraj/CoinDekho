const API_KEY = '2be9647e0b2626c6d0966951da9d783a';

const API = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

// ..............all var............//

const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
const cname = document.getElementById("cname");
const des = document.getElementById("des");
const tm = document.getElementById("tm");

btn.addEventListener("click", () => {
    const city = input.value
    getwether(city)
})

function getwether(city) {
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"2be9647e0b2626c6d0966951da9d783a"}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

             const iconCode = data.weather[0].icon;
             const Description=data.weather[0].description;
             const weTem =data.main.temp;
             const wecity = data.name;
             const wecountry = data.sys.country;

             weeTem=weTem-273;
             const temp = weeTem.toFixed(2)
             tm.innerHTML=`${temp}°C`
             cname.innerHTML=`${wecity},${wecountry}`;
             des.innerHTML=`${Description}`
             icon.innerHTML= `<img src="http://openweathermap.org/img/wn/${iconCode}.png"/>`
        })

}