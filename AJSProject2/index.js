let button = document.getElementById("button")
let input = document.getElementsByTagName("input")[0]
let body = document.getElementsByTagName("body")[0]
let table = document.getElementById("table")
let tbody = document.createElement("tbody")
let tableDiv = document.getElementById("tableDiv")
tableDiv.style.display = "none"
table.appendChild(tbody)
function countryCall (fillTable){
    let country = input.value
   fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response){
        if(response.ok) {
            return response.json()
        }
    })
    // .then(result => console.log(result))
    .then(fillTable)
}

function tableFill(data){
   
    data.forEach(element => {
        let flag = element.flags.png
        let name = element.name.common
        let population = element.population
        let capital = element.capital ? element.capital[0] : "/"
        let area = element.area
        let languages = Object.values(element.languages).join(', ')
        let currencies = Object.values(element.currencies).map(el=> el.symbol).join(', ')
        
        
        let tr = document.createElement("tr")
        
        
        let flagTd = document.createElement("td")
        let img = document.createElement("img")
        img.src= flag
        flagTd.appendChild(img)
        tr.appendChild(flagTd)
        
        let nameTd = document.createElement("td")
        nameTd.innerHTML = name
        tr.appendChild(nameTd)

        let populationTd = document.createElement("td")
        populationTd.innerHTML = population
        tr.appendChild(populationTd)

        let capitalTd = document.createElement("td")
        capitalTd.innerHTML=capital
        tr.appendChild(capitalTd)

        let areaTd = document.createElement("td")
        areaTd.innerHTML=area
        tr.appendChild(areaTd)

        let languagesTd =document.createElement("td")
        languagesTd.innerHTML = languages
        tr.appendChild(languagesTd)

        let currenciesTd =document.createElement("td")
        currenciesTd.innerHTML = currencies
        tr.appendChild(currenciesTd)

        tbody.appendChild(tr)
        table.appendChild(tbody)
        tableDiv.style.display = "block"
    });
}
button.addEventListener("click", function() {
    tbody.innerHTML = ""
    countryCall(tableFill)
})
