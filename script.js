const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const cupDate = '4 Feb 2021';

function countdown(){
    const cupdate = new Date(cupDate);
    const currentDate = new Date();

    const totalSeconds = (cupdate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours) ;
    minsEl.innerHTML = formatTime(mins) ;
    secsEl.innerHTML = formatTime(secs) ;

    // console.log(days, hours, mins, secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);