const weatherform =document.querySelector(".weatherfm")
const cityinput = document.querySelector(".cityinput")
const card = document.querySelector(".card")
const api_key = "ddaf05d18883b4b53664ed4f6dca9f0e"

weatherform.addEventListener("submit", event =>{

    event.preventDefault()

    const city =cityinput.value

    if(city) {

    }

    else{
        displayError("Please Enter a City")
    }
})

async function getWeatherData(city) {
    
}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const Error_display =document.createElement("p")
    Error_display.textContent = message
    Error_display.classList.add("Error_display")

    card.textContent = ""
}