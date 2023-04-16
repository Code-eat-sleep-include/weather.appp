var submit_btn = document.getElementById("submit")
submit_btn.addEventListener("click", updateDOM)

function updateDOM() {
    let skycondition=document.getElementById("sky")
    let temperature=document.getElementById("temp")
    let wind=document.getElementById("wind")
    let cityname=document.getElementById("cityname").value
    const key = "8a0fc07c08d9ec30fef03b604e080a8a"
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+key)
        .then((res) => res.json())
        .then((data) => {
      console.log(data)
    temperature.innerHTML = "Temperature: " + data.main.temp + "K"
      console.log(data)
    skycondition.innerHTML = "Sky condition: " + data.weather[0].description
      console.log(data)
    wind.innerHTML = "Wind speed: " + data.wind.speed + "m/s"          
    })
        .catch((error) => console.error(error));
}
