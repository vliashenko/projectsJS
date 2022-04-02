// let weather = {
//     "apikey" : "8172fc7c92e0f1a9288e18fe7808b0ec",
//     fetchWeather: function() {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=8172fc7c92e0f1a9288e18fe7808b0ec"
//         ).then((response) => response.json())
//         .then((data) => console.log(data.weather))
//     },
// }

const cityName = document.querySelector('#cityName');
const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('.icon');
const isSunny = document.querySelector('.isSunny');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');


function findCity(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8172fc7c92e0f1a9288e18fe7808b0ec`
    ).then((response) => response.json())
    .then((data) => {
        if(data.name) {
            getCity(data)
        } else {
            invalidInput()
        }
    })

    function getCity(city) {
    cityName.innerHTML = city.name
    searchBox.setAttribute('placeholder', 'Search')
    searchBox.value = ""
}

    function invalidInput() {
        searchBox.value = ""
        searchBox.setAttribute('placeholder', 'Invalid city name')
    }

}


function capitalizeFirstLetter(word) {
    let splitted = word.split("");
    let sliced = (splitted.slice(0,1)).join("").toUpperCase()
    splitted.splice(0,1,sliced)
    return splitted.join("")
}

function getCelsAndHumidity(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8172fc7c92e0f1a9288e18fe7808b0ec`
    ).then((response) => response.json())
    .then((data) => {
    let { main } = data;
        temperature.innerHTML = Math.floor(main.temp)
        humidity.innerHTML = main.humidity
    })  
}

function sky(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8172fc7c92e0f1a9288e18fe7808b0ec`
    ).then((response) => response.json())
    .then((data) => {
    const { weather } = data;
        weather.forEach(item=> {
            let cap = capitalizeFirstLetter(item.description)
            isSunny.innerHTML = cap
            icon.src = `https://openweathermap.org/img/wn/${item.icon}@2x.png`
        })
    })  
}

function wind(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8172fc7c92e0f1a9288e18fe7808b0ec`
    ).then((response) => response.json())
    .then((data) => {
    const { wind } = data;
    windSpeed.innerHTML = wind.speed
    })  
}
searchBtn.addEventListener('click', () => {
    findCity(searchBox.value);
    getCelsAndHumidity(searchBox.value);
    sky(searchBox.value);
    wind(searchBox.value);
})
searchBox.addEventListener('keyup', (event) => {
    if(event.key === "Enter"){
        findCity(searchBox.value);
        getCelsAndHumidity(searchBox.value);
        sky(searchBox.value);
        wind(searchBox.value);
    }
})