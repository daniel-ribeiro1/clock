let hoursPointer = document.querySelector('.pointers .hours-pointer');
let minutesPointer = document.querySelector('.pointers .minutes-pointer');
let secondsPointer = document.querySelector('.pointers .seconds-pointer');
let digitalClock = document.querySelector('.digital-clock #time');

setInterval(updateClock, 1000);
updateClock();

function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    updatePointers(hours, minutes, seconds);

    if(hours < 10)
        hours = '0' + hours;
    if(minutes < 10)
        minutes = '0' + minutes;
    if(seconds < 10)
        seconds = '0' + seconds;

    digitalClock.innerHTML = `${hours} : ${minutes} : ${seconds}`
}

function updatePointers(hours, minutes, seconds) {
    let hoursDeg = (360 / 12) * hours - 90; 
    let minutesDeg = (360 / 60) * minutes - 90; 
    let secondsDeg = (360 / 60) * seconds - 90; 

    hoursPointer.style.transform = `rotate(${hoursDeg}deg)`;
    minutesPointer.style.transform = `rotate(${minutesDeg}deg)`;
    secondsPointer.style.transform = `rotate(${secondsDeg}deg)`;
}