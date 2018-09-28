
function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if(hours < 10) {
        hours = '0' + hours;
    }

    if(mins < 10) {
        mins = '0' + mins;
    }

    if(secs < 10) {
        secs = '0' + secs;
    }

    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = ' : ' + mins + ' : ';
    document.querySelector('#seconds').innerHTML = secs;
}

setInterval(clock, 100);