const weatherform =document.querySelector(".weatherfm")
const cityinput = document.querySelector(".cityinput")
const card = document.querySelector(".card")
const api_key = "ddaf05d18883b4b53664ed4f6dca9f0e"

weatherform.addEventListener("submit",async event =>{

    event.preventDefault()

    const city =cityinput.value

    if(city) {

        try{
            const WeatherData = await getWeatherData(city)
            displayWeatherInfo(WeatherData)
        }

        catch(error){
            console.log(error)
            displayError(error)
        }
        

    }

    else{
        displayError("Please Enter a City")
    }
})

async function getWeatherData(city) {

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const response = await fetch(api_url)

    if (!response.ok){
        throw new Error("Could not Fetch Weather Data")

       
    }
     return await response.json()
}

function displayWeatherInfo(data){
const {name: city, 
        main: {temp, humidity}, 
            weather: [{description, id}]} = data

card.textContent = ""
card.style.display ="flex"

const cityDisplay =document.createElement("h1")
const tempDisplay =document.createElement("p")
const humidityDisplay =document.createElement("p")
const descriptionDisplay =document.createElement("p")
const weatherEmoji =document.createElement("p")

cityDisplay.textContent = city
tempDisplay.textContent =`${(temp - 273.15).toFixed(1)}°C`
humidityDisplay.textContent =`Humidity: ${humidity}%`
descriptionDisplay.textContent = description
weatherEmoji.textContent = getWeatherEmoji(id)

cityDisplay.classList.add("citydisplay")
tempDisplay.classList.add("tempdisplay")
descriptionDisplay.classList.add("description")
weatherEmoji.classList.add("Weather_emoji")

card.appendChild(cityDisplay)
card.appendChild(tempDisplay)
card.appendChild(humidityDisplay)
card.appendChild(descriptionDisplay)
card.appendChild(weatherEmoji)


}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const Error_display =document.createElement("p")
    Error_display.textContent = message
    Error_display.classList.add("Error_display")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(Error_display)
}