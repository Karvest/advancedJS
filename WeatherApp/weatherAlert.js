let weatherAlertDiv = document.getElementById("weatherAlert")
let hourlyReportDiv = document.getElementById("hourlyReport")
let statisticsNav = document.getElementById("statistics")
let hourlyNav = document.getElementById("hourly")
let button = document.getElementById("button")
let input = document.getElementsByTagName("input")[0]
weatherAlertDiv.style.display = "none"
hourlyReportDiv.style.display = "none"
let city = "Skopje"
async function weatherCall (printFunction){
    city = input.value
    let weather = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=4a37558a85354007173e68dea5e5a7ad`)
    .then(function (response){
        if(response.ok) {
            return response.json()
        }
    })
    .then(result => console.log(result))
    .then(printFunction)
    
}


async function showStatistics (result){
    weatherAlertDiv.style.display = "block"
    hourlyReportDiv.style.display = "none"
    let highestTemp =result.list[0].main.temp_max
    let lowestTemp = result.list[0].main.temp_min
    let humidity = result.list[0].main.humidity
    let table = document.createElement("table")
    let highestTempTH = document.createElement("td")
    let lowestTempTH =  document.createElement("td")
    let humidityTH =  document.createElement("td")
    highestTempTH.innerHTML = `Highest Temperature is ${highestTemp}C`;
    lowestTempTH.innerHTML = `Lowest Temperature is ${lowestTemp}C`;
    humidityTH.innerHTML = `Humidity is at ${humidity}%`;
    table.appendChild(highestTempTH)
    table.appendChild(lowestTempTH)
    table.appendChild(humidityTH)
}
function showHourly (){
    hourlyReportDiv.style.display = "block"
    weatherAlertDiv.style.display = "none"
 }

statisticsNav.addEventListener("click",weatherCall(showStatistics) )
// hourlyNav.addEventListener("click", )
button.addEventListener("click", weatherCall)
 // let temperatureSum = 0;
    // ;
    // ;
    // let humiditySum = 0;
    // ;
    // let lowestHumidity = result.list[0];