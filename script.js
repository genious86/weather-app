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