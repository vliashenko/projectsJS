const days = document.querySelector('#days');
const daysSpan = document.querySelector('#d-1');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const date = '1 Jan 2023'

function countDown() {
    let newYearEve = new Date(date);
    
    let curentDate = new Date();

    let totalSeconds = (newYearEve - curentDate) / 1000;

    
    const days_ = Math.floor(totalSeconds / 3600 / 24);   
    const hours_ = Math.floor(totalSeconds / 3600) % 24;  
    const minutes_ = Math.floor(totalSeconds / 60) % 60;  
    const seconds_ = Math.floor(totalSeconds) % 60 
    
    days.innerHTML = correctDay(days_)
    hours.innerHTML = correctTime(hours_)
    minutes.innerHTML = correctTime(minutes_)
    seconds.innerHTML = correctTime(seconds_)

    function correctTime(time) {
        if(time < 10) {
            time = `0${time}`
        }
        return time
    }
    function correctDay(day){
        if(day < 2) {
            daysSpan.innerHTML = "Day"
        }
        return day
    }
}

countDown()

setInterval(countDown, 1000)